import React from 'react';
import { GoPlus } from 'react-icons/go';

const AddWidgetCard = ({ onClick }) => (
  <div className='h-60 flex-1 bg-white py-4 px-4 rounded-lg flex items-center justify-center'>
    <button
      onClick={onClick}
      className='flex items-center gap-1 text-sm bg-white px-3 py-1 rounded-md shadow-sm hover:bg-gray-100 transition border'
    >
      <GoPlus /> Add Widget
    </button>
  </div>
);

export default AddWidgetCard;