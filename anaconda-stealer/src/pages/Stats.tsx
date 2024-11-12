import React, { useState } from "react";
import LineGraph from "../components/LineGraph";
import WorldMap from "../components/WorldMap";
import PieChart from "../components/PieChart";
import Skull from "../public/assets/skull.svg";
import countryFlag from "../public/assets/US.svg";

interface InfectionLevel {
  level: "critical" | "high" | "medium" | "low" | "safe";
  color: string;
}

const Stats: React.FC = () => {
  const [selectedContinent, setSelectedContinent] = useState("North America");

  // Define infection levels with corresponding colors
  const infectionLevels: Record<string, InfectionLevel> = {
    critical: { level: "critical", color: "#FF0000" }, // Red - 75-100%
    high: { level: "high", color: "#FFA500" }, // Orange - 50-75%
    medium: { level: "medium", color: "#FFFF00" }, // Yellow - 25-50%
    low: { level: "low", color: "#70C46F" }, // Green - 1-25%
    safe: { level: "safe", color: "#D3D3D3" }, // Grey - 0%
  };

  const getInfectionLevel = (percentage: number): InfectionLevel => {
    if (percentage >= 75) return infectionLevels.critical;
    if (percentage >= 50) return infectionLevels.high;
    if (percentage >= 25) return infectionLevels.medium;
    if (percentage > 0) return infectionLevels.low;
    return infectionLevels.safe;
  };

  const continentData = {
    Africa: { continent: "Africa", infectedPercentage: 30 },
    Asia: { continent: "Asia", infectedPercentage: 45 },
    Europe: { continent: "Europe", infectedPercentage: 25 },
    "North America": { continent: "North America", infectedPercentage: 60 },
    "South America": { continent: "South America", infectedPercentage: 40 },
    Oceania: { continent: "Oceania", infectedPercentage: 10 },
    Antarctica: { continent: "Antarctica", infectedPercentage: 5 },
  };

  const handleContinentSelect = (continent: string) => {
    setSelectedContinent(continent);
  };

  const { infectedPercentage } =
    continentData[selectedContinent as keyof typeof continentData];
  const currentInfectionLevel = getInfectionLevel(infectedPercentage);

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <LineGraph />

      <div className="flex items-center justify-center gap-40 flex-wrap">
        <div className="bg-[#DEF3ED] p-5">
          <WorldMap
            continentData={continentData}
            selectedContinent={selectedContinent}
            onSelectContinent={handleContinentSelect}
            infectionLevels={infectionLevels}
            getInfectionLevel={getInfectionLevel}
          />
          <div className="text-center mt-20 flex justify-start items-center gap-3">
            <img src={countryFlag} alt="country flag" />
            <h3 className="text-lg font-semibold font-ProximaNovaRegular">
              {selectedContinent}
            </h3>
            <p className="font-bold font-ProximaNovaRegular">
              {infectedPercentage}
            </p>
          </div>
        </div>
        <div className="flex flex-col  gap-5 justify-center items-center">
          <div className="md:px-24 py-3 justify-center items-center cursor-pointer">
            <div
              id="infected_button"
              className="flex items-center p-4 bg-[#70C46F] gap-2 w-[15rem] rounded-lg"
            >
              <img src={Skull} alt="Skull Icon" className="w-8" />
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm">Infected</p>
                <p className="text-white text-lg font-bold">999</p>
              </div>
            </div>
          </div>
          <PieChart
            infectedPercentage={infectedPercentage}
            infectionLevels={infectionLevels}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
