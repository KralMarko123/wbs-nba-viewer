import sparqlTransformer from "sparql-transformer";
import * as myConstants from "../constants/constants";
import * as myQueries from "../constants/queries";

const SparqlService = {
	fetchAllPlayers: () => {
		return sparqlTransformer(myQueries.GET_ALL_PLAYERS, {
			endpoint: myConstants.DEFAULT_ENDPOINT,
		});
	},

	fetchPlayer: (id) => {
		return sparqlTransformer(myQueries.GET_PLAYER(id), {
			endpoint: myConstants.DEFAULT_ENDPOINT,
		});
	},

	fetchOtherItem: () => {
		return sparqlTransformer(myQueries.GET_OTHER_ITEM, {
			endpoint: myConstants.DEFAULT_ENDPOINT,
		});
	},
};

export default SparqlService;
