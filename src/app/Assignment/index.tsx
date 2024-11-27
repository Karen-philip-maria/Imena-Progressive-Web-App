// import React from 'react';

// const Assignments = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Assignments</h1>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border-b">Assignments</th>
//             <th className="px-4 py-2 border-b">Submissions</th>
//             <th className="px-4 py-2 border-b">Average Grade</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="px-4 py-2 border-b">Cooking</td>
//             <td className="px-4 py-2 border-b">13/30</td>
//             <td className="px-4 py-2 border-b">24/30</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2 border-b">Environmental</td>
//             <td className="px-4 py-2 border-b">28/30</td>
//             <td className="px-4 py-2 border-b">24/30</td>
//           </tr>
//           <tr>
//             <td className="px-4 py-2 border-b">Knitting</td>
//             <td className="px-4 py-2 border-b">20/30</td>
//             <td className="px-4 py-2 border-b">24/30</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Assignments;


import React from 'react';
import { Bell } from 'lucide-react';

const Assignments = () => {
  const assignments = [
    { name: "Cooking", submissions: "13/30", averageGrade: "24/30" },
    { name: "Environmental", submissions: "28/30", averageGrade: "24/30" },
    { name: "Knitting", submissions: "20/30", averageGrade: "24/30" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold ml-[-224px]">Assignments</h1>
        <div className="flex items-center gap-4 mr-[-424px]">
          <Bell className="w-8 h-8 text-purple-500" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white">
              <span className="text-sm">GD</span>
            </div>
            <span className="text-2xl text-gray-700">Grace Daniel</span>
          </div>
        </div>
      </div>

      {/* Submissions Section */}
      <div>
        <h2 className="font-semibold mb-4 text-3xl ml-[-224px]">Number of submissions per assignment.</h2>
        <div className="overflow-x-auto ml-[-224px]">
  <table className="table-auto w-full max-w-screen-xl border-collapse border border-gray-300">
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-300 px-6 py-3 text-left text-lg">Assignments</th>
        <th className="border border-gray-300 px-6 py-3 text-left text-lg">Submissions</th>
        <th className="border border-gray-300 px-6 py-3 text-left text-lg">Average Grade</th>
      </tr>
    </thead>
    <tbody>
      {assignments.map((assignment, index) => (
        <tr key={index} className="even:bg-gray-50">
          <td className="border border-gray-300 px-6 py-3 text-lg">{assignment.name}</td>
          <td className="border border-gray-300 px-6 py-3 text-lg">{assignment.submissions}</td>
          <td className="border border-gray-300 px-6 py-3 text-lg">{assignment.averageGrade}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>

      {/* Graph Section */}
      <div>
      <div className="mt-8 ml-[24px]">
        <div className="w-full h-64 bg-gray-100 rounded-lg border flex justify-center items-center">
          <span className="text-gray-500 text-sm">Graph Placeholder</span>
        </div>
        <div className="text-center mt-4 text-gray-700 font-medium">Assignments</div>
      </div>

      {/* Y-axis Label */}
      <div className="absolute left-4 top-1/2 transform -rotate-90 text-sm text-gray-600  ml-[264px]">
        Submissions
      </div>
      </div>
    </div>
  );
};

export default Assignments;
