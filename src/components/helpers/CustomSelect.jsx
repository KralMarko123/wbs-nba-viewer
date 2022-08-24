import { React, useState, useEffect } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import "../../styles/CustomSelect.css";

const CustomSelect = ({ defaultValue, optionValues, handleResultCountFilter }) => {
	const [selectedOption, setSelectedOption] = useState(defaultValue);
	const [isOpen, setIsOpen] = useState(false);

	const toggleSelectMenu = () => {
		setIsOpen((prevState) => !prevState);
	};

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
		handleResultCountFilter(option);
		window.sessionStorage.setItem("resultsCount", option);
	};

	useEffect(() => {
		let resultsCount = window.sessionStorage.getItem("resultsCount");
		if (resultsCount) {
			setSelectedOption(resultsCount);
			handleOptionSelect(resultsCount);
		}
	}, []);

	return (
		<div className={`custom-select ${isOpen ? "active" : ""}`} onClick={() => toggleSelectMenu()}>
			<p className="selected-option">{selectedOption}</p>
			{isOpen ? (
				<AiOutlineArrowUp className="select-arrow" />
			) : (
				<AiOutlineArrowDown className="select-arrow" />
			)}
			<ul className={`options ${isOpen ? "shown" : "hidden"}`}>
				{optionValues.map((option) => (
					<li
						key={option}
						className="option"
						onClick={() => handleOptionSelect(option)}
						onBlur={() => toggleSelectMenu()}
					>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CustomSelect;
