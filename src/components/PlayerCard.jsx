import { React } from "react";
import PlaceholderImage from "../assets/images/player_placeholder.png";
import "../styles/PlayerCard.css";

const PlayerCard = ({ name, image, dob, draftYear }) => {
  return (
    <div className="player-card">
      <img
        className="player-image"
        src={image[0]}
        onError={(e) => (e.currentTarget.src = PlaceholderImage)}
      />

      <div className="player-info">
        <h1 className="player-title">{name}</h1>
        <span className="player-dob">DOB: {dob}</span>
        <span className="player-dob">
          Draft Year: {draftYear ? draftYear : "Unknown"}
        </span>
      </div>
    </div>
  );
};

export default PlayerCard;
