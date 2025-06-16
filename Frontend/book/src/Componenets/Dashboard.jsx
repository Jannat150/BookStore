import React from 'react';
import { Outlet } from 'react-router-dom';
import Data from './Data'; // Importing the Data component

const Dashboard = () => {
  return (
    <div className='flex gap-4 flex-row'>
      <Data/>
      <Outlet/>
    </div>
    // <div className="flex h-screen">
    //   <Data /> {/* Fixed Drawer on the left side */}
      
    //   {/* Content Area for the Dashboard */}
    //   <div className="flex-grow p-6">
    //     <h1 className="text-2xl font-bold">Dashboard</h1>
    //     <Outlet />
    //   </div>
    // </div>
  );
};

export default Dashboard;
