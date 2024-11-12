import React from "react";

import DiscordIcon from "../public/assets/Discord.svg";
import Download from "./Download";

const Discord: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 py-5 gap-3">
      <img src={DiscordIcon} alt="Discord Icon" className="w-30" />
      <p className="text-textLight font-ProximaNovaRegular">
        {" "}
        lyragraphics#2290
      </p>
      <p className="text-textLight  font-ProximaNovaRegular">+14 9999999999</p>
      <Download text="Token.txt" />
    </div>
  );
};

export default Discord;
