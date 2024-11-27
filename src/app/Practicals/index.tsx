// // pages/knitting.js
// import React from 'react';

// const PracticalPage = () => {
//   return (
//     <div className="bg-white py-8 px-6 sm:px-8 md:px-10 lg:px-12">
//       <div className="max-w-3xl mx-auto">
//         {/* <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center">
//             <img src="/ubora-logo.svg" alt="Ubora CBC" className="h-8 mr-4" />
//             <h1 className="text-2xl font-bold">Knitting</h1>
//           </div>
//           <div className="flex space-x-4">
//             <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
//               Home
//             </a>
//             <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
//               Practicals
//             </a>
//             <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
//               Q & A
//             </a>
//             <a href="#" className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
//               Assignment
//             </a>
//           </div>
//         </div> */}
//         <div className="bg-pink-100 rounded-md p-8">
//           <div className="flex justify-center">
//             <img src="/knitting-icon.svg" alt="Knitting" className="h-24 w-24" />
//           </div>
//           <div className="text-center mt-4">
//             <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
//               Upload
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PracticalPage;


// pages/knitting.js
import React from 'react';

const PracticalPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl px-6 sm:px-8 md:px-10 lg:px-12">
        <div className="bg-pink-100 rounded-md p-8">
          <div className="flex justify-center">
            <img src="images/knitting.png" alt="Knitting" className="h-24 w-24" />
          </div>
          <div className="text-center mt-4">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticalPage;
