import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SparqlService from "../services/SparqlFactory";
import PlaceholderImage from "../assets/images/player_placeholder.png";
import "../styles/Page.css";
import "../styles/Details.css";

const Details = () => {
  const { state } = useLocation();
  const playerDetails = state;
  const [additionalPlayerDetails, setAdditionalPlayerDetails] = useState({
    id: "",
    abstract: "",
    number: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      await SparqlService.fetchPlayerInfo(playerDetails.id).then((data) => {
        console.log(data);
        setAdditionalPlayerDetails(data[0]);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="details page">
      <section className="player-container">
        <img
          src={playerDetails.image}
          alt="player__image"
          className="player-cover"
          onError={(e) => (e.currentTarget.src = PlaceholderImage)}
        />

        <div className="player-details">
          <div className="player-abstract">
            <span>Label</span>
            <p className="abstract">{additionalPlayerDetails.abstract}</p>
          </div>

          <div className="player-number">
            <span>Label</span>
            <p className="abstract">{additionalPlayerDetails.number}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
