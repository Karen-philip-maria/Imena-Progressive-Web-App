import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center mb-8">
        <Image src="/avatar.png" alt="Grace Daniel" width={40} height={40} className="rounded-full mr-2" />
        <h1 className="text-2xl font-bold">Hello Grace,</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-300 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-2">Kristin</h2>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-purple-500 text-white p-2 rounded">Cooking</div>
            <div className="bg-purple-500 text-white p-2 rounded">Knitting</div>
            <div className="bg-purple-500 text-white p-2 rounded">Tree</div>
            <div className="bg-purple-500 text-white p-2 rounded">Painting</div>
          </div>
        </div>
        <div className="bg-purple-300 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-2">July</h2>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-purple-500 text-white p-2 rounded">Cooking</div>
            <div className="bg-purple-500 text-white p-2 rounded">Knitting</div>
            <div className="bg-purple-500 text-white p-2 rounded">Tree</div>
            <div className="bg-purple-500 text-white p-2 rounded">Painting</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;