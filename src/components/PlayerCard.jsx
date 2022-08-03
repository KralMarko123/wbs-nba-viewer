import { React } from "react";
import { useNavigate } from "react-router-dom";
import * as HelperFunctions from "../services/HelperFunctions";
import PlaceholderImage from "../assets/images/player_placeholder.png";
import "../styles/PlayerCard.css";

const PlayerCard = ({ name, image, dob, draftYear, team }) => {
  let navigate = useNavigate();
  const calculatedImage = HelperFunctions.calculatePlayerImage(image);

  return (
    <div
      className="player-card"
      onClick={() => navigate(`./details/${name}`, { state: { name: name } })}
    >
      <img
        className="player-image"
        src={calculatedImage}
        onError={(e) => (e.currentTarget.src = PlaceholderImage)}
        onLoad={(e) => (e.currentTarget.style.background = "none")}
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
