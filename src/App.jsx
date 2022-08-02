import { React, useState, useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import SparqlService from "./services/SparqlFactory";
import "./styles/App.css";

const isWithLatinCharacters = (name) => {
  if (typeof name === "object") {
    return name.filter((name) => /^[a-zA-Z\s.,]+$/.test(name))[0];
  } else return name;
};

const App = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await SparqlService.fetchAllPlayers()
        .then((data) => {
          console.log(data);
          setPlayers(data);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          name={isWithLatinCharacters(player.name)}
          image={player.image}
          dob={player.birthDate}
          draftYear={player.draftYear}
        />
      ))}
    </div>
  );
};

export default App;
