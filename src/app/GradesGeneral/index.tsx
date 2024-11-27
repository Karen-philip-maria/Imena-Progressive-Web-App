"use client"
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components needed for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const data = {
    labels: ['Cooking', 'Knitting', 'Tree', 'Painting'],
    datasets: [
      {
        label: 'Grades',
        data: [75, 50, 80, 90],
        backgroundColor: [
          '#9333EA', // Cooking
          '#A78BFA', // Knitting
          '#D8B4FE', // Tree
          '#E9D5FF', // Painting
        ],
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: { label: any; raw: any; }) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      legend: {
        display: true,
        position: 'top' as const,  // Use 'as const' to enforce string literal types
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex justify-center mt-8">
      <div style={{ width: '400px', height: '400px' }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

const GradesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-purple-600">Grades Overview</h1>
      <DoughnutChart />
    </div>
  );
};

export default GradesPage;