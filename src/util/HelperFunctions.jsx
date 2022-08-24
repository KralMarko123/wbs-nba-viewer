import PlaceholderImage from "../assets/images/player_placeholder.png";

//HELPER FUNCTIONS
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

export const formatJerseyNumber = (number) => {
	if (number === undefined) return "Unknown";

	let numberAsText = number.toString();
	return numberAsText.length <= 2 ? number : "Had Multiple";
};

export const formatBasketballSuffix = (text) => {
	return text !== undefined ? text.toLowerCase().replace("(basketball)", "") : text;
};
