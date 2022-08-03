import sparqlTransformer from "sparql-transformer";
import * as myConstants from "../constants/constants";
import * as myQueries from "../constants/queries";

const SparqlService = {
  fetchAllPlayers: () => {
    return sparqlTransformer(myQueries.GET_ALL_PLAYERS, {
      endpoint: myConstants.DEFAULT_ENDPOINT,
    });
  },

  fetchPlayerInfo: (playerId) => {
    return sparqlTransformer(myQueries.GET_PLAYER(playerId), {
      endpoint: myConstants.DEFAULT_ENDPOINT,
    });
  },
};

export default SparqlService;
