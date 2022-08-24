import { React } from "react";
import { useNavigate } from "react-router-dom";
import * as HelperFunctions from "../util/HelperFunctions";
import PlaceholderImage from "../assets/images/player_placeholder.png";
import "../styles/PlayerCard.css";

const PlayerCard = ({ id, name, image, dob, draftYear, team }) => {
	const calculatedImage = HelperFunctions.calculatePlayerImage(image);
	let navigate = useNavigate();

	const handlePlayerCardClick = () => {
		navigate(`./details/${name}`, { state: id });
	};

	return (
		<div className="player-card" onClick={() => handlePlayerCardClick()}>
			<img
				className="player-image"
				src={calculatedImage}
				onError={(e) => (e.currentTarget.src = PlaceholderImage)}
				onLoad={(e) => {
					e.currentTarget.style.background = "none";
					e.currentTarget.classList.add("loaded");
				}}
				alt="PLAYER__IMAGE"
			/>

			<div className="player-info">
				<h1 className="player-title">
					{HelperFunctions.formatBasketballSuffix(name).toLowerCase() || "No Name"}
				</h1>
				<span className="player-data">DOB: {dob}</span>
				<span className="player-data">Draft Year: {draftYear || "Unknown"}</span>
				<span className="player-data">Team: {team}</span>
			</div>
		</div>
	);
};

export default PlayerCard;
