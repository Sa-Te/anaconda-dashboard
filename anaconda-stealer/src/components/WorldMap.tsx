import React from "react";
import { ReactSVG } from "react-svg";
import WorldMapChart from "../public/assets/WorldMap.svg";

interface CountryData {
  continent: string;
  infectedPercentage: number;
}

interface InfectionLevel {
  level: "critical" | "high" | "medium" | "low" | "safe";
  color: string;
}

interface WorldMapProps {
  continentData: Record<string, CountryData>;
  selectedContinent: string;
  onSelectContinent: (continent: string) => void;
  infectionLevels: Record<string, InfectionLevel>;
  getInfectionLevel: (percentage: number) => InfectionLevel;
}

const WorldMap: React.FC<WorldMapProps> = ({
  continentData,
  selectedContinent,
  onSelectContinent,
  infectionLevels,
  getInfectionLevel,
}) => {
  const getRegionColor = (continent: string) => {
    const data = continentData[continent];
    if (!data) return infectionLevels.safe.color;

    const infectionLevel = getInfectionLevel(data.infectedPercentage);
    return infectionLevel.color;
  };

  const handleContinentClick = (continent: string) => {
    if (continentData[continent]) {
      onSelectContinent(continent);
    }
  };

  return (
    <div style={{ width: "100%", height: "300px", position: "relative" }}>
      <ReactSVG
        src={WorldMapChart}
        afterInjection={(svg) => {
          svg.setAttribute("id", "world-map-svg");
          Object.keys(continentData).forEach((continent) => {
            const path = svg.getElementById(continent);
            if (path) {
              path.setAttribute("fill", getRegionColor(continent));
              (path as HTMLElement).style.cursor = "pointer";
              path.addEventListener("click", () =>
                handleContinentClick(continent)
              );
            }
          });
        }}
        onError={(error) => console.error("Error loading SVG:", error)}
      />
    </div>
  );
};

export default WorldMap;
