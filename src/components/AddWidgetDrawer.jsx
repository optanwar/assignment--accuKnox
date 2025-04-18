import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CustomTabPanel from './CustomTabPanel';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../slices/widgetSlice';
import widgetData from '../json/widgets.json';

const tabMapping = [
  'CSPM Executive Dashboard',
  'CWPP Dashboard',
  'Image',
  'Ticket',
];

const AddWidgetDrawer = ({ open, onClose, tabValue, setTabValue }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.widgets);

  const [selectedWidgets, setSelectedWidgets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const currentCategory = tabMapping[tabValue];
  const currentCategoryWidgets =
    categories.find((cat) => cat.name === currentCategory)?.widgets || [];
  const existingWidgetNames = currentCategoryWidgets.map((w) => w.name);

  const handleCheckboxChange = (widgetName) => {
    setSelectedWidgets((prev) =>
      prev.includes(widgetName) ? prev.filter((w) => w !== widgetName) : [...prev, widgetName]
    );
  };

  const handleConfirm = () => {
    const baseWidgets = widgetData[currentCategory] || [];

    baseWidgets.forEach((widget) => {
      if (
        selectedWidgets.includes(widget.name) &&
        !existingWidgetNames.includes(widget.name)
      ) {
        dispatch(addWidget({ categoryName: currentCategory, widget }));
      }
    });

    if (newWidgetName && newWidgetText && !existingWidgetNames.includes(newWidgetName)) {
      dispatch(
        addWidget({
          categoryName: currentCategory,
          widget: { name: newWidgetName, text: newWidgetText },
        })
      );
    }

    setSelectedWidgets([]);
    setNewWidgetName('');
    setNewWidgetText('');
  };

  useEffect(() => {
    if (!open) {
      setSelectedWidgets([]);
      setSearchQuery('');
      setNewWidgetName('');
      setNewWidgetText('');
    }
  }, [open]);

  const filterWidgets = (widgets) =>
    widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const renderWidgetList = (widgets) => {
    return filterWidgets(widgets).map((widget, index) => {
      const isAlreadyAdded = existingWidgetNames.includes(widget.name);
      return (
        <div key={index} className="flex items-center gap-2">
          <input
            type="checkbox"
            id={widget.name}
            disabled={isAlreadyAdded}
            checked={isAlreadyAdded || selectedWidgets.includes(widget.name)}
            onChange={() => handleCheckboxChange(widget.name)}
          />
          <label
            htmlFor={widget.name}
            className={`font-roboto text-sm text-gray-800 ${
              isAlreadyAdded
                ? 'line-through text-gray-400 cursor-not-allowed'
                : 'cursor-pointer'
            }`}
          >
            {widget.name}
          </label>
        </div>
      );
    });
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box className="w-screen sm:w-[384px] md:w-[530px] lg:w-[600px] xl:w-[750px] max-w-full relative min-h-screen flex flex-col justify-between">
        <div className="bg-blue-950 flex justify-between items-center px-4 py-4">
          <h1 className="font-roboto text-base font-semibold text-white">Add Widget</h1>
          <button onClick={onClose} className="text-xl text-white hover:text-red-500 transition">
            <AiOutlineClose />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-y-auto pb-24">
          <p className="font-roboto font-normal text-gray-800 text-xs md:text-sm">
            Personalise your dashboard by adding the following widget
          </p>

          <input
            type="text"
            placeholder="Search widgets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-3 mb-3 w-full px-3 py-1 border rounded-md"
          />

          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="CSPM" />
                <Tab label="CWPP" />
                <Tab label="Image" />
                <Tab label="Ticket" />
              </Tabs>
            </Box>

            {tabMapping.map((tabLabel, index) => (
              <CustomTabPanel key={index} value={tabValue} index={index}>
                <div className="flex flex-col gap-2 pb-10">
                  {widgetData[tabLabel]
                    ? renderWidgetList(widgetData[tabLabel])
                    : <p className='font-roboto text-sm text-gray-700'>{tabLabel} Tab</p>}
                </div>
              </CustomTabPanel>
            ))}
          </Box>

          <div className="mt-4 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Custom Widget Name"
              value={newWidgetName}
              onChange={(e) => setNewWidgetName(e.target.value)}
              className="px-3 py-1 border rounded-md"
            />
            <input
              type="text"
              placeholder="Custom Widget Description"
              value={newWidgetText}
              onChange={(e) => setNewWidgetText(e.target.value)}
              className="px-3 py-1 border rounded-md"
            />
          </div>
        </div>

        <div className="w-full px-4 py-3 flex justify-end gap-2 border-t bg-white fixed bottom-0 left-0 z-10">
          <button
            onClick={onClose}
            className="font-medium font-roboto text-base px-4 py-1 border rounded-md hover:bg-gray-300 transition-all duration-200"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleConfirm();
              onClose();
            }}
            className="font-medium font-roboto text-base bg-blue-900 hover:bg-blue-950 text-white px-4 py-1 border rounded-md transition-all duration-200"
          >
            Confirm
          </button>
        </div>
      </Box>
    </Drawer>
  );
};

export default AddWidgetDrawer;
