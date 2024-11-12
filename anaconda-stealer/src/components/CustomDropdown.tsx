import React, { useState } from "react";
import DropdownArrowIcon from "../public/assets/DropdownArrowIcon.svg";
import { countryDropdown } from "../constants";

const CustomDropdown: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryDropdown[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country: (typeof countryDropdown)[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div
      className="relative inline-flex items-center gap-2 p-2 mx-2 border rounded-lg bg-white text-textLight font-bold cursor-pointer justify-between"
      onClick={toggleDropdown}
    >
      <img
        src={selectedCountry.icon}
        alt={`${selectedCountry.country} Icon`}
        className="w-5 h-5 object-contain" // Ensure icon is the same size
      />
      <span className="text-sm">{selectedCountry.country}</span>
      <img src={DropdownArrowIcon} alt="Dropdown Arrow" className="w-4 ml-2" />

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {countryDropdown.map((country) => (
            <div
              key={country.id}
              onClick={(e) => {
                e.stopPropagation(); // Prevents the dropdown from closing when selecting an option
                handleSelect(country);
              }}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer justify-start"
            >
              <img
                src={country.icon}
                alt={`${country.country} Icon`}
                className="w-5 h-5 object-contain" // Ensure icon is the same size here as well
              />
              <span className="text-textLight font-ProximaNovaRegular">
                {country.country}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
