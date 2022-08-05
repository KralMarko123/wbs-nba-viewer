import { React, useState, useEffect } from "react";
import * as HelperFunctions from "../services/HelperFunctions";
import SparqlService from "../services/SparqlFactory";
import LoadingSpinner from "../components/helpers/LoadingSpinner";
import Header from "../components/layout/Header";
import PlayerCard from "../components/PlayerCard";
import "../styles/Page.css";
import "../styles/Home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPlayers, setAllPlayersConstant] = useState([]);
  const [players, setPlayers] = useState([]);
  const [resultCount, setResultCount] = useState(20);

  const nameFilterApplied = (text) => {
    let filteredPlayers = allPlayers.filter((player) =>
      HelperFunctions.shouldBeShown(player.name, text)
    );
    setPlayers(filteredPlayers);
  };

  const resultCountFilterApplied = (number) => {
    return number === "All"
      ? setResultCount(allPlayers.length)
      : setResultCount(parseInt(number));
  };

  useEffect(() => {
    const fetchData = async () => {
      let allPlayers = window.sessionStorage.getItem("allPlayers");
      if (allPlayers) {
        allPlayers = JSON.parse(allPlayers);

        setPlayers(allPlayers);
        setAllPlayersConstant(allPlayers);
        setIsLoading(false);

        return;
      }

      await SparqlService.fetchAllPlayers().then((data) => {
        setPlayers(data);
        setAllPlayersConstant(data);
        window.sessionStorage.setItem("allPlayers", JSON.stringify(data));

        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 5000);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="home page">
      {isLoading === false ? (
        <Header
          nameFilterApplied={nameFilterApplied}
          resultCountFilterApplied={resultCountFilterApplied}
        />
      ) : null}

      <section className="player-grid">
        {isLoading ? (
          <LoadingSpinner text={"Getting Players"} />
        ) : (
          players.map((player, i) => {
            if (i > resultCount - 1) {
              return;
            }

            return (
              <PlayerCard
                key={player.id}
                id={player.id}
                name={HelperFunctions.isWithLatinCharacters(player.name)}
                image={player.image}
                dob={player.birthDate}
                draftYear={player.draftYear}
                team={HelperFunctions.isWithLatinCharacters(player.team.name)}
              />
            );
          })
        )}

        {players.length === 0 && isLoading === false ? (
          <p className="no-results-message">Seems there are no results...</p>
        ) : null}
      </section>
    </div>
  );
};

export default Home;
