import { React } from "react";
import "../../styles/Header.css";

const Header = ({ nameFilterApplied }) => {
  const handleNameFilter = (filter) => {
    nameFilterApplied(filter);
  };

  return (
    <header className="header">
      <div className="filters">
        <input
          type="text"
          id="name-filter"
          className="filter"
          placeholder="Filter by Name ..."
          onChange={(e) => handleNameFilter(e.currentTarget.value)}
        />
      </div>
      <button className="submit-button">Apply Filters</button>
    </header>
  );
};

export default Header;
