import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoWhite from "../public/assets/Logowhite.svg";
import DashboardIcon from "../public/assets/dashboardIcon.svg";
import StatsIcon from "../public/assets/statsIcon.svg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Check if current path is the stats page
  const isStatsPage = location.pathname === "/dashboard/stats";

  return (
    <aside
      className={`fixed lg:static z-50 w-72 h-full p-4 flex flex-col space-y-4 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 ${
        isStatsPage ? "bg-[#004B38]" : "bg-[#70C46F]"
      } text-white`}
    >
      <div className="flex flex-col gap-3 justify-center items-center mb-8">
        <div>
          <img src={LogoWhite} alt="White Logo" className="w-15" />
          <h2 className="text-xl pb-1 font-bold font-MontserratBold">
            Anaconda Stealer
          </h2>
        </div>
        <div className="p-[1px] w-[15rem] bg-white" />
      </div>

      <nav className="flex flex-col space-y-4">
        <Link
          to="/dashboard"
          className={`p-2 font-bold rounded-lg items-center flex gap-5 text-xl font-MontserratBold ${
            location.pathname === "/dashboard"
              ? "bg-[#91E390] hover:bg-gray-700"
              : "bg-[#068362] hover:bg-gray-700"
          }`}
          onClick={onClose} // Close sidebar on link click
        >
          <img src={DashboardIcon} alt="Dashboard Icon" className="w-6 mx-4" />
          Dashboard
        </Link>
        <Link
          to="/dashboard/stats"
          className={`p-2 font-bold rounded-lg items-center flex gap-5 text-xl font-MontserratBold ${
            location.pathname === "/dashboard/stats"
              ? "bg-[#068362] hover:bg-gray-700"
              : "bg-[#91E390] hover:bg-gray-700"
          }`}
          onClick={onClose} // Close sidebar on link click
        >
          <img src={StatsIcon} alt="Stats Icon" className="w-6 mx-4" />
          Stats
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
