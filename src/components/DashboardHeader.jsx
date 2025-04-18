import React from 'react';
import { GoPlus } from 'react-icons/go';
import { FiRefreshCw } from 'react-icons/fi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdAccessTime } from 'react-icons/md';

const DashboardHeader = ({ onClick }) => (
  <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
    <h1 className='text-base md:text-lg font-roboto font-bold text-gray-900'>CNAPP Dashboard</h1>
    <div className='flex flex-wrap md:flex-nowrap items-center gap-3 w-full md:w-auto'>
      <button  onClick={onClick} className='flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-md shadow-sm hover:bg-gray-100 transition'>
        Add Widget <GoPlus />
      </button>
      <button className='text-lg bg-white p-2 rounded-md shadow-sm hover:bg-gray-100 transition'>
        <FiRefreshCw size={12} />
      </button>
      <button className='text-lg bg-white p-2 rounded-md shadow-sm hover:bg-gray-100 transition'>
        <HiOutlineDotsVertical size={12} />
      </button>
      <div className='border border-blue-900 text-blue-900 flex items-center gap-2 text-sm font-roboto bg-white px-3 py-1 rounded-md shadow-sm'>
        <MdAccessTime className='text-lg' />
        <span>|</span>
        <select className='bg-transparent outline-none'>
          <option>Last 2 days</option>
          <option>Last 3 days</option>
          <option>Last 4 days</option>
          <option>Last 5 days</option>
        </select>
      </div>
    </div>
  </div>
);

export default DashboardHeader;