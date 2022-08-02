import { React } from "react";
import CustomSelect from "../helpers/CustomSelect";
import * as myConstants from "../../constants/constants";
import "../../styles/Header.css";

const Header = ({ nameFilterApplied, resultCountFilterApplied }) => {
  //handlers
  const handleNameFilter = (filter) => {
    nameFilterApplied(filter);
  };

  const handleResultCountFilter = (filter) => {
    resultCountFilterApplied(filter);
  };

  return (
    <header className="header">
      <div className="filters">
        <input
          type="text"
          id="name"
          className="name-filter"
          placeholder="Filter by Name ..."
          onChange={(e) => handleNameFilter(e.currentTarget.value)}
          maxLength={18}
        />

        <CustomSelect
          defaultValue={myConstants.RESULTS_COUNTS[1]}
          optionValues={myConstants.RESULTS_COUNTS}
          handleResultCountFilter={handleResultCountFilter}
        />
      </div>
    </header>
  );
};

export default Header;
