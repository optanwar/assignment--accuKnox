import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white py-4 px-4 flex justify-center items-center'>
      <p className='text-sm font-roboto font-normal text-gray-900'>
      © Copyright {new Date().getFullYear()} AccuKnox all rights reserved
      </p>
      
    </div>
  )
}

export default Footer