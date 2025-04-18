import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-white shadow-sm'>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-3 md:py-4'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2 sm:gap-3 md:gap-4'>
          
          {/* Breadcrumb */}
          <div className='flex justify-between items-center w-full'>
          <div className='flex items-center gap-2 text-sm md:text-base'>
            <span className='text-gray-600 font-normal font-roboto'>Home</span>
            <FaChevronRight className='text-gray-400' size={12} />
            <span className='text-gray-900 font-semibold font-roboto'>Dashboard V2</span>
          </div>
          <div className='flex md:hidden gap-3 text-xl text-gray-700'>
              <button><MdOutlineNotificationsActive size={18} /></button>
              <button><FaUserCircle size={18} /></button>
            </div>
          </div>
          

          {/* Right Side Items */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full md:w-auto'>

            {/* Search Box */}
            <div className='relative w-full md:w-auto'>
              <input 
                type="text" 
                placeholder='Search anything ...' 
                name='search' 
                className='w-full md:w-64 border outline-none px-7 py-1 rounded-md text-xs font-roboto'
              />
              <span className='absolute left-2 top-2 text-gray-500 text-sm'>
                <IoSearch />
              </span>
            </div>

            {/* Icons */}
            <div className=' hidden md:flex gap-3 text-xl text-gray-700'>
              <button><MdOutlineNotificationsActive size={18} /></button>
              <button><FaUserCircle size={18} /></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
