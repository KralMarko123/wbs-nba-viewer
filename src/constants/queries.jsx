import * as myConstants from "./constants";

export const GET_ALL_PLAYERS = {
  proto: {
    id: "?id",
    name: "$rdfs:label$required$lang:en",
    league: "$dbo:league$var:league",
    image: "$foaf:depiction$sample",
    birthDate: "$dbo:birthDate",
    draftYear: "$dbo:draftYear",
    team: {
      id: "$dbo:team$required",
      name: "$dbp:name",
    },
  },

  $values: {
    league: `dbr:${myConstants.NBA_LEAGUE}`,
  },

  $langTag: "hide",
};
