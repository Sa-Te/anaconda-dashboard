import React, { useState } from "react";
import Logs from "./Logs";
import Discord from "./Discord";
import IP from "./IP";
import Download from "./Download";
import DownloadSection from "./DownloadSection";

const LogSection: React.FC = () => {
  // State to track the visibility of the DownloadSection
  const [isDownloadSectionVisible, setIsDownloadSectionVisible] =
    useState(false);

  // Toggle the visibility of the DownloadSection when clicked
  const handleLogSectionClick = () => {
    setIsDownloadSectionVisible((prevState) => !prevState);
  };

  return (
    <>
      <div
        id="log__section"
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4  border border-textLight rounded-lg gap-4 p-2 text-center cursor-pointer"
        onClick={handleLogSectionClick} // Toggle on click
      >
        {/* Make the Logs section span 2 columns on large screens */}
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-textLight p-8">
          <Logs />
        </div>
        <div className="border-b lg:border-b-0 lg:border-r border-textLight">
          <Discord />
        </div>
        <div className="border-b lg:border-b-0 lg:border-r border-textLight p-8">
          <IP />
        </div>
        {/* Center the Download section */}
        <div className="flex justify-center items-center">
          <Download />
        </div>
      </div>
      {/* Conditionally render DownloadSection based on isDownloadSectionVisible */}
      {isDownloadSectionVisible && (
        <div>
          <DownloadSection />
        </div>
      )}
    </>
  );
};

export default LogSection;
