import React from "react";
import FilterIcon from "../public/assets/filter.svg";
import CustomDropdown from "./CustomDropdown";
import SearchIcon from "../public/assets/searchIcon.svg";

const SearchSection: React.FC = () => {
  return (
    <div className="flex py-10 px-2 justify-between">
      <div
        className="flex items-start justify-center flex-col gap-5"
        id="filter__section"
      >
        <div className="flex items-center justify-center gap-3 pointer-events-none">
          <img src={FilterIcon} alt="Filter Icon" className="w-8" />
          <p className="text-md font-bold capitalize text-textLight font-ProximaNovaBold">
            {" "}
            Filter by:{" "}
          </p>
        </div>

        <div className="flex items-center gap-3 ">
          <p className="font-semibold font-ProximaNovaBold text-textLight ">
            Country:
          </p>
          <CustomDropdown />
        </div>
      </div>
      <div className="relative bg-[#ECECEC] rounded-full h-10 w-[20rem] flex items-center px-10 cursor-pointer">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full outline-none placeholder-textLight text-black font-semibold pr-10 font-MontserratBold"
        />
        <img
          src={SearchIcon}
          alt="Search Icon"
          className="w-6 absolute right-4"
        />
      </div>
    </div>
  );
};

export default SearchSection;
