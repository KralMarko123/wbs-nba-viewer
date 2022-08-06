import { React, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SparqlService from "../services/SparqlFactory";
import * as HelperFunctions from "../services/HelperFunctions";
import * as myConstants from "../constants/constants";
import LoadingSpinner from "../components/helpers/LoadingSpinner";
import "../styles/Page.css";
import "../styles/Details.css";

const Details = () => {
  const { state } = useLocation();
  const playerId = state;
  const [isLoading, setIsLoading] = useState(true);
  const [playerDetails, setPlayerDetails] = useState(
    myConstants.PLACEHOLDER_PLAYER_DETAILS
  );

  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let player = window.sessionStorage.getItem(`${playerId}-details`);
      if (player) {
        try {
          player = JSON.parse(player);

          setPlayerDetails(player);
          setIsLoading(false);
          return;
        } catch (error) {
          navigate("*");
        }
      }

      await SparqlService.fetchPlayer(playerId).then((data) => {
        setPlayerDetails(data[0]);
        window.sessionStorage.setItem(
          `${playerId}-details`,
          JSON.stringify(data[0])
        );

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="details page">
      <section className="player-container">
        <div className="top">
          <img
            className="player-cover"
            src={HelperFunctions.calculatePlayerImage(playerDetails.image)}
            onLoad={(e) => (e.currentTarget.style.background = "none")}
            alt="PLAYER__IMAGE"
          />

          {isLoading ? (
            <LoadingSpinner text={"Getting Details"} />
          ) : (
            <div className="player-details">
              <div className="info">
                <span className="label">Name:</span>
                <p className="info-text">
                  {HelperFunctions.isWithLatinCharacters(playerDetails.name)
                    .replace("(basketball)", "")
                    .toLowerCase() || "No Name"}
                </p>
              </div>

              <div className="info">
                <span className="label">Team:</span>
                <p className="info-text">
                  {HelperFunctions.isWithLatinCharacters(
                    playerDetails.team.name
                  )}
                </p>
              </div>

              <div className="info">
                <span className="label">Jersey Number:</span>
                <p className="info-text">
                  {HelperFunctions.formatJerseyNumber(playerDetails.number)}
                </p>
              </div>

              <div className="info">
                <span className="label">Draft Year:</span>
                <p className="info-text">
                  {playerDetails.draftYear || "Unknown"}
                </p>
              </div>

              <div className="info">
                <span className="label">Birth Date:</span>
                <p className="info-text">{playerDetails.birthDate}</p>
              </div>

              <div className="info">
                <span className="label">Position:</span>
                <p className="info-text">
                  {HelperFunctions.formatBasketballSuffix(
                    playerDetails.position.name
                  ) || "Unknown"}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bottom">
          <div className="player-abstract">
            <span className="label">Description:</span>
            <p className="abstract">{playerDetails.abstract}</p>
          </div>

          <button
            className="back-button"
            onClick={() => navigate("/wbs-nba-viewer")}
          >
            Back To Homepage
          </button>
        </div>
      </section>
    </div>
  );
};

export default Details;
