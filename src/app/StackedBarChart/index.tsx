// "use client";
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// interface StackedBarChartProps {
//   data: {
//     labels: string[];
//     completeData: number[];
//     incompleteData: number[];
//   };
// }

// const StackedBarChart: React.FC<StackedBarChartProps> = ({ data }) => {
//   const chartData = {
//     labels: data.labels,
//     datasets: [
//       {
//         label: 'Complete',
//         data: data.completeData,
//         backgroundColor: '#8242D6',
//         borderColor: 'black',
//         borderWidth: 1,
//         stack: 'stack1',
//       },
//       {
//         label: 'Incomplete',
//         data: data.incompleteData,
//         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//         borderColor: 'black',
//         borderWidth: 1,
//         stack: 'stack1',
//       },
//     ],
//   };

//   const options = {
//     indexAxis: 'y',
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         stacked: true,
//         ticks: {
//           beginAtZero: true,
//           color: 'black',
//           font: {
//             family: 'Darker Grotesque, sans-serif',
//             weight: 'bold',
//             size: 14,
//           },
//         },
//       },
//       y: {
//         stacked: true,
//         ticks: {
//           color: 'black',
//           font: {
//             family: 'Darker Grotesque, sans-serif',
//             weight: 'bold',
//             size: 14,
//           },
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         labels: {
//           color: 'black',
//           font: {
//             family: 'Darker Grotesque, sans-serif',
//             weight: 'bold',
//           },
//         },
//       },
//       title: {
//         display: true,
//         text: 'Number of Students',
//         color: 'black',
//         font: {
//           family: 'Darker Grotesque, sans-serif',
//           weight: 'bold',
//           size: 18,
//         },
//         position: 'bottom',
//       },
//     },
//   };

//   return (
//     <Card className="w-full max-w-4xl">
//       <CardHeader>
//         <CardTitle>Completion of Practical Activity</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="overflow-x-auto">
//           <Bar data={chartData} options={options} />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default StackedBarChart;


// import React from 'react';
// import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';


// const StackedBarChart = () => {
//   const data = [
//     { name: 'Cooking', Completions: 54, Incomplete: 0 },
//     { name: 'Agriculture', Completions: 47, Incomplete: 0 },
//     { name: 'Knitting', Completions: 50, Incomplete: 0 },
//     { name: 'Arts', Completions: 40, Incomplete: 0 },
//     { name: 'Modelling', Completions: 52, Incomplete: 0 },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="flex items-center mb-8">
//         <img src="/avatar.png" alt="Grace Daniel" className="rounded-full mr-2 h-10" />
//         <h1 className="text-2xl font-bold">Engagement</h1>
//       </div>
//       <div className="w-full max-w-4xl">
//         <BarChart data={data} width={600} height={400}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Tooltip />
//           <Bar dataKey="Completions" fill="#7e3af2" />
//           <Bar dataKey="Incomplete" fill="#d8d8d8" />
//         </BarChart>
//       </div>
//     </div>
//   );
// };

// export default StackedBarChart;


import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const StackedBarChart = () => {
  const data = [
    { name: 'Cooking', Completions: 54, Incomplete: 0 },
    { name: 'Agriculture', Completions: 47, Incomplete: 0 },
    { name: 'Knitting', Completions: 50, Incomplete: 0 },
    { name: 'Arts', Completions: 40, Incomplete: 0 },
    { name: 'Modelling', Completions: 52, Incomplete: 0 },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center mb-8">
        <img src="/avatar.png" alt="Grace Daniel" className="rounded-full mr-2 h-10" />
        <h1 className="text-2xl font-bold">Engagement</h1>
      </div>
      <div className="w-full max-w-4xl">
        <BarChart data={data} width={600} height={400}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="Completions" fill="#7e3af2" />
          <Bar dataKey="Incomplete" fill="#d8d8d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default StackedBarChart;
