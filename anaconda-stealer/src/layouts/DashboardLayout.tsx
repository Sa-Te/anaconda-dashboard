import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex h-screen">
      {/* "Menu" button for mobile screens */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#70C46F] text-white rounded-lg font-MontserratBold"
        onClick={toggleSidebar}
      >
        Menu
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <Outlet />
      </main>

      {/* Backdrop to close sidebar on outside click */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
