"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const data = {
    labels: ["Agriculture", "Cooking", "Knitting"],
    datasets: [
      {
        label: "Grades",
        data: [50, 80, 90],
        backgroundColor: [
          "#553788", 
          "#9747FF", 
          "#EC407A", 
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: { label: any; raw: any }) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex justify-center mt-8">
      <div style={{ width: "400px", height: "400px" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

const TeacherHomepage = () => {
  const assessments = [
    { practical: "Agriculture", part: "Scarf", date: "12/02/11", submission: "15/30", average: "58%" },
    { practical: "Cooking", part: "Pilau", date: "12/02/11", submission: "15/30", average: "58%" },
    { practical: "Knitting", part: "Tree Planting", date: "12/02/11", submission: "15/30", average: "58%" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Darker Grotesque"', padding: "20px" }}>
      <div className="pt-24">
        <div className="flex gap-8 mb-12">
          <div className="p-6 flex items-center gap-6 flex-1 border rounded-md shadow-lg">
            <div className="text-purple-600">
              <span className="text-[30px]">Practical</span>
            </div>
          </div>
          <div className="p-6 flex items-center gap-6 flex-1 border rounded-md shadow-lg">
            <div className="text-pink-500">
              <span className="text-[30px]">Q & A</span>
            </div>
          </div>
          <div className="p-6 flex items-center gap-6 flex-1 border rounded-md shadow-lg">
            <div className="text-pink-300">
              <span className="text-[30px]">Assignment</span>
            </div>
          </div>
        </div>
        <div className="flex gap-12 mt-[-24px]">
          <div className="p-8 flex-1 border rounded-md shadow-lg">
            <h2 className="font-semibold mb-6 text-[30px]">Assessment</h2>
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-4 text-[24px]">Practical</th>
                  <th className="pb-4 text-[24px]">Part</th>
                  <th className="pb-4 text-[24px]">Date</th>
                  <th className="pb-4 text-[24px]">Submission</th>
                  <th className="pb-4 text-[24px]">Average</th>
                </tr>
              </thead>
              <tbody>
                {assessments.map((assessment, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-6 text-[22px]">{assessment.practical}</td>
                    <td className="py-4 text-[22px]">{assessment.part}</td>
                    <td className="py-4 text-[22px]">{assessment.date}</td>
                    <td className="py-4 text-[22px]">{assessment.submission}</td>
                    <td className="py-4 text-[22px]">{assessment.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-8 w-96 border rounded-md shadow-lg">
            <h2 className="font-semibold mb-6 text-[25px]">Assignment Performance</h2>
            <DoughnutChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHomepage;
