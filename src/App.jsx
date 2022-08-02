import { React, useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import LoadingSpinner from "./components/helpers/LoadingSpinner";
import SparqlService from "./services/SparqlFactory";

import "./styles/App.css";

const isWithLatinCharacters = (name) => {
  if (typeof name === "object") {
    return name.filter((name) => /^[a-zA-Z\s.]+$/.test(name))[0];
  } else return name;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [players, setPlayers] = useState([]);

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
          />
        ))
      )}
    </div>
  );
};

export default App;
