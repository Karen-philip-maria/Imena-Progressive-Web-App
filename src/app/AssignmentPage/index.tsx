// import React from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Bell } from 'lucide-react';
// const Assignments = () => {
//   const assignments = [
//     { name: "Cooking", submissions: "13/30", averageGrade: "24/30" },
//     { name: "Environmental", submissions: "28/30", averageGrade: "24/30" },
//     { name: "Knitting", submissions: "20/30", averageGrade: "24/30" }
//   ];
//   const yAxisLabels = Array.from({ length: 7 }, (_, i) => (30 - i * 5));
//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Assignments</h1>
//         <div className="flex items-center gap-4">
//           <Bell className="w-6 h-6 text-purple-500" />
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
//               <span className="text-sm">GD</span>
//             </div>
//             <span className="text-sm text-gray-700">Grace Daniel</span>
//           </div>
//         </div>
//       </div>
//       <Card>
//         <CardHeader>
//           <CardTitle>Number of submissions per assignment.</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b">
//                   <th className="text-left py-3 px-4 font-semibold">Assignments</th>
//                   <th className="text-left py-3 px-4 font-semibold">Submissions</th>
//                   <th className="text-left py-3 px-4 font-semibold">Average Grade</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {assignments.map((assignment, index) => (
//                   <tr key={index} className="border-b last:border-b-0">
//                     <td className="py-3 px-4">{assignment.name}</td>
//                     <td className="py-3 px-4">{assignment.submissions}</td>
//                     <td className="py-3 px-4">{assignment.averageGrade}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//       <div className="mt-8">
//         <div className="w-full h-80 bg-white rounded-lg border p-4">
//           <div className="h-full flex relative">
//             {/* Y-axis labels and grid lines */}
//             <div className="absolute left-0 top-0 h-full w-12 flex flex-col justify-between pr-2">
//               {yAxisLabels.map((label, index) => (
//                 <div key={index} className="flex items-center justify-end h-6 -ml-2">
//                   <span className="text-xs text-gray-500">{label}</span>
//                 </div>
//               ))}
//             </div>
//             {/* Grid lines */}
//             <div className="absolute left-12 top-0 right-0 h-full flex flex-col justify-between">
//               {yAxisLabels.map((_, index) => (
//                 <div key={index} className="border-b border-gray-200 w-full h-0" />
//               ))}
//             </div>
//             {/* Y-axis line */}
//             <div className="absolute left-12 top-0 w-px h-full bg-gray-300" />
//             {/* X-axis line */}
//             <div className="absolute left-12 bottom-0 right-0 h-px bg-gray-300" />
//             {/* Bars */}
//             <div className="flex-1 flex items-end justify-around pl-12 pt-4 pb-8">
//               {assignments.map((assignment, index) => {
//                 const submissionCount = parseInt(assignment.submissions);
//                 const height = `${(submissionCount / 30) * 100}%`;
//                 return (
//                   <div key={index} className="flex flex-col items-center">
//                     <div
//                       className="w-16 bg-purple-500 rounded-t"
//                       style={{ height }}
//                     ></div>
//                     <span className="mt-2 text-sm text-gray-600">{assignment.name}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//         <div className="text-center mt-4 text-gray-700">Assignments</div>
//       </div>
//       {/* Label for y-axis */}
//       <div className="absolute -left-12 top-1/2 transform -rotate-90 text-sm text-gray-600">
//         Submissions
//       </div>
//     </div>
//   );
// };
// export default Assignments;