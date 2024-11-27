'use client';
import React from 'react';
const Dashboard = () => {
    return (
        <div className="flex flex-col p-5 bg-gray-100 ">
            <div className="flex justify-between items-center mb-5">
                <div className='welcome'>
                    <h1 className="text-2xl font-bold text-black">Engagement</h1>
                    {/* <p className="text-lg text-black">Welcome Back Susan</p>  */}
                </div>
                <div className='flex items-center'>
                    <img src="/images/Susan.jpg" alt="Susan" className='w-20 h-20 rounded-full' />
                    <div id="title" className="ml-3">
                        <p className='text-lg font-semibold text-black'>Susan Masaku</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;