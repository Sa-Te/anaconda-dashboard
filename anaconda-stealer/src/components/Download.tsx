import React from "react";
import DownloadIcon from "../public/assets/DownloadIcon.svg";

interface DownloadProps {
  text?: string;
}

const Download: React.FC<DownloadProps> = ({ text = "Download" }) => {
  return (
    <div className=" md:px-24 lg:px-10 py-3 justify-center items-center cursor-pointer ">
      <div
        id="download__icon"
        className="flex  items-center px-2 py-1 bg-[#068362] gap-2 sm:w-[8rem] md:w-[10rem] lg:w-[10rem] rounded-lg"
      >
        <img src={DownloadIcon} alt="Download Icon" className="w-8 " />
        <p className="text-white font-semibold text-sm font-ProximaNovaBold p-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Download;
