"use client"
import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const EngagementDashboard: React.FC = () => {
  const data = [
    { name: 'Cooking', Completions: 54, Incomplete: 0 },
    { name: 'Agriculture', Completions: 47, Incomplete: 0 },
    { name: 'Knitting', Completions: 50, Incomplete: 0 },
    { name: 'Arts', Completions: 40, Incomplete: 0 },
    { name: 'Modelling', Completions: 52, Incomplete: 0 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
         <div className="flex justify-between items-center mb-8 mt-[104px]">
        <h1 className="text-3xl font-bold ml-[-380px] mt-[-400px]">Hello Grace,</h1>
        <div className="flex items-center gap-4 mr-[-800px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white mt-[-400px]">
              <span className="text-sm mt-[-400px]">GD</span>
            </div>
            <span className="text-2xl text-gray-700 mt-[-400px]">Grace Daniel</span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl mt-[-45px]">
        <BarChart data={data} width={1000} height={500}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="Completions" fill="#7e3af2" />
          <Bar dataKey="Incomplete" fill="#d8d8d8" />
        </BarChart>
        <h1 className="text-3xl font-bold ml-[-85px] mt-[-200px]">Grades</h1>
        <h1 className="text-3xl font-bold ml-[285px] mt-[200px]">Practicals</h1>
      </div>
    </div>
  );
};

export default EngagementDashboard;