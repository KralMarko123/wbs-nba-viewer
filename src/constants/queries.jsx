import * as myConstants from "./constants";

export const GET_ALL_PLAYERS = {
  proto: {
    id: "?id",
    name: "$rdfs:label$required",
    league: "$dbo:league$var:league",
    image: "$foaf:depiction$required",
    birthDate: "$dbo:birthDate",
    draftYear: "$dbo:draftYear",
  },
  $values: {
    league: `dbr:${myConstants.NBA_LEAGUE}`,
  },
  $langTag: "hide",
};

export const GET_POSITION_NAME = {
  proto: {
    id: "?id",
    name: "$rdfs:label$required",
    subject: "$dbc:Small_forwards",
    hypernym: "$dbr:Positions",
  },
  $langTag: "hide",
};
