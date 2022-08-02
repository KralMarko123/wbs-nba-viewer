import { React, useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import LoadingSpinner from "./components/helpers/LoadingSpinner";
import SparqlService from "./services/SparqlFactory";

import "./styles/App.css";
import Header from "./components/layout/Header";

//helpers
const isWithLatinCharacters = (name) => {
  if (typeof name === "object") {
    return name.filter((name) => /^[a-zA-Z\s.]+$/.test(name))[0];
  } else return name;
};

const shouldBeShown = (playerName, nameFilter) => {
  if (nameFilter === undefined) return true;
  return playerName.toLowerCase().includes(nameFilter.toLowerCase());
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState([]);
  const [nameFilter, setNameFilter] = useState(undefined);

  //handlers
  const nameFilterApplied = (text) => {
    setNameFilter(text);
  };

  useEffect(() => {
    const fetchData = async () => {
      await SparqlService.fetchAllPlayers()
        .then((data) => {
          console.log(data);
          setPlayers(data);

          setTimeout(() => {
            setIsLoading(false);
          }, 5000);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header nameFilterApplied={nameFilterApplied} />

      <section className="player-grid">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          players.map((player) => (
            <PlayerCard
              key={player.id}
              name={isWithLatinCharacters(player.name)}
              image={player.image}
              dob={player.birthDate}
              draftYear={player.draftYear}
              team={isWithLatinCharacters(player.team.name)}
              show={shouldBeShown(
                isWithLatinCharacters(player.name),
                nameFilter
              )}
            />
          ))
        )}
      </section>
    </div>
  );
};

export default App;
