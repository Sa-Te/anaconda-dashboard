// src/pages/Dashboard.tsx
import React from "react";
import SearchSection from "../components/SearchSection";
import LogSection from "../components/LogSection";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <SearchSection />
      <LogSection />
      <LogSection />
    </div>
  );
};

export default Dashboard;
