import { React, useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import LoadingSpinner from "./components/helpers/LoadingSpinner";
import SparqlService from "./services/SparqlFactory";
import Header from "./components/layout/Header";
import "./styles/App.css";

const isWithLatinCharacters = (name) => {
  if (typeof name === "object") {
    return name.filter((name) => /^[a-zA-Z\s.]+$/.test(name))[0];
  } else return name;
};

const shouldBeShown = (playerName, nameFilter) => {
  if (nameFilter === undefined || nameFilter === "") return true;
  return playerName.toLowerCase().includes(nameFilter.toLowerCase());
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPlayers, setAllPlayersConstant] = useState([]);
  const [players, setPlayers] = useState([]);
  const [resultCount, setResultCount] = useState(20);

  const nameFilterApplied = (text) => {
    let filteredPlayers = allPlayers.filter((player) =>
      shouldBeShown(player.name, text)
    );
    setPlayers(filteredPlayers);
  };

  const resultCountFilterApplied = (number) => {
    number === "All"
      ? setResultCount(players.length)
      : setResultCount(parseInt(number));
  };

  useEffect(() => {
    const fetchData = async () => {
      await SparqlService.fetchAllPlayers().then((data) => {
        setPlayers(data);
        setAllPlayersConstant(data);

        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      {isLoading === false ? (
        <Header
          nameFilterApplied={nameFilterApplied}
          resultCountFilterApplied={resultCountFilterApplied}
        />
      ) : null}

      <section className="player-grid">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          players.map((player, i) => {
            if (i > resultCount) {
              return;
            }

            return (
              <PlayerCard
                key={player.id}
                name={isWithLatinCharacters(player.name)}
                image={player.image}
                dob={player.birthDate}
                draftYear={player.draftYear}
                team={isWithLatinCharacters(player.team.name)}
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

export default App;
