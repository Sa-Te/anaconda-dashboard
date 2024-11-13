import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph: React.FC = () => {
  // Example data for the line graph (time vs infected devices)
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Time labels
    datasets: [
      {
        label: "Infected Devices",
        data: [50, 100, 150, 200, 250, 300], // Data points
        borderColor: "#70C46F", // Updated line color
        backgroundColor: "rgba(112, 196, 111, 0.1)", // Updated background fill color
        fill: true, // Enable filling the area under the line
        tension: 0.4,
      },
    ],
  };

  // Options for the graph (e.g., maintain aspect ratio, grid lines)
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Infected Devices Over Time",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
        },
      },
    },
  };

  return <Line data={data} options={options} className="mt-10" />;
};

export default LineGraph;
