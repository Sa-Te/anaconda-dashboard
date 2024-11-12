import React from "react";
import europeFlag from "../public/assets/europe-flag.svg";

const IP: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 py-5 gap-5">
      <img src={europeFlag} alt="Europe Flag" />
      <p className="text-textLight underline text-lg font-ProximaNovaRegular">
        {" "}
        81.144.155.26
      </p>
    </div>
  );
};

export default IP;
