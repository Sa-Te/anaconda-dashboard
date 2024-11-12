import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface InfectionLevel {
  level: "critical" | "high" | "medium" | "low" | "safe";
  color: string;
}

interface PieChartProps {
  infectedPercentage: number;
  infectionLevels: Record<string, InfectionLevel>;
}

const PieChart: React.FC<PieChartProps> = ({
  infectedPercentage,
  infectionLevels,
}) => {
  const colors = Object.values(infectionLevels).map((level) => level.color);
  const remainingPercentage = 100 - infectedPercentage;

  // Distribute the infected percentage across severity levels
  const divisions = [
    Math.max(0, infectedPercentage - 75), // critical
    Math.max(0, Math.min(infectedPercentage - 50, 25)), // high
    Math.max(0, Math.min(infectedPercentage - 25, 25)), // medium
    Math.max(0, Math.min(infectedPercentage, 25)), // low
    remainingPercentage, // safe
  ].filter((value) => value > 0);

  const data = {
    datasets: [
      {
        data: divisions,
        backgroundColor: colors.slice(0, divisions.length),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${Math.round(context.raw)}%`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "200px", height: "200px" }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
