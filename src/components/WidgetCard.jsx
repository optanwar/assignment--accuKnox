import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const WidgetCard = ({ id, name, text, onRemove }) => {
  return (
    <div className='relative flex-1 bg-white py-4 px-4 rounded-lg flex flex-col justify-between'>
      <button
        onClick={() => onRemove(id)}
        className='absolute top-2 right-2 text-gray-500 hover:text-red-600 transition text-lg'
      >
        <AiOutlineClose />
      </button>
      <h4 className='text-sm font-medium font-roboto mb-2'>{name || 'Cloud Account'}</h4>
      <div className='flex gap-6 flex-1 items-center'>
        <img
          src='https://piktochart.com/wp-content/uploads/2021/08/pie_1-1024x1024.png'
          alt=''
          className='h-36'
        />
        <ul className='text-sm font-normal font-roboto'>
          <li>{text || 'Connected'}</li>

        </ul>
      </div>
    </div>
  );
};

export default WidgetCard;
