import { React } from "react";
import { useNavigate } from "react-router-dom";
import * as HelperFunctions from "../services/HelperFunctions";
import PlaceholderImage from "../assets/images/player_placeholder.png";
import "../styles/PlayerCard.css";

const PlayerCard = ({ id, name, image, dob, draftYear, team }) => {
  let navigate = useNavigate();
  const calculatedImage = HelperFunctions.calculatePlayerImage(image);
  const playerDetails = {
    id: id,
    name: name,
    image: calculatedImage,
    dob: dob,
    draftYear: draftYear,
    team: team,
  };

  return (
    <div
      className="player-card"
      onClick={() => navigate(`./details/${name}`, { state: playerDetails })}
    >
      <img
        className="player-image"
        src={calculatedImage}
        onError={(e) => (e.currentTarget.src = PlaceholderImage)}
        onLoad={(e) => (e.currentTarget.style.background = "none")}
        alt="player__image"
      />

      <div className="player-info">
        <h1 className="player-title">{name || "No Name"}</h1>
        <span className="player-data">DOB: {dob}</span>
        <span className="player-data">
          Draft Year: {draftYear || "Unknown"}
        </span>
        <span className="player-data">Team: {team}</span>
      </div>
    </div>
  );
};

export default PlayerCard;
