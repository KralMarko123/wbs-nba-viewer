import { React } from "react";
import PlaceholderImage from "../assets/images/player_placeholder.png";
import "../styles/PlayerCard.css";

const handlePlayerImage = (image) => {
  let imageURL;

  typeof image === "object" ? (imageURL = image[0]) : (imageURL = image);
  imageURL === undefined ? (imageURL = PlaceholderImage) : null;

  return imageURL;
};

const PlayerCard = ({ name, image, dob, draftYear, team }) => {
  return (
    <div className="player-card">
      <img
        className="player-image"
        src={handlePlayerImage(image)}
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
