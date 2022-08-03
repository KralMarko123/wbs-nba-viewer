//HELPER FUNCTIONS
import PlaceholderImage from "../assets/images/player_placeholder.png";

export const isWithLatinCharacters = (name) => {
  if (typeof name === "object") {
    return name.filter((name) => /^[a-zA-Z\s.]+$/.test(name))[0];
  } else return name;
};

export const shouldBeShown = (playerName, nameFilter) => {
  if (nameFilter === undefined || nameFilter === "") return true;
  return playerName.toLowerCase().includes(nameFilter.toLowerCase());
};

export const calculatePlayerImage = (image) => {
  if (image === undefined) return PlaceholderImage;
  else return image;
};
