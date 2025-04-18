import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeWidget } from './slices/widgetSlice';
import DashboardHeader from './components/DashboardHeader';
import WidgetCard from './components/WidgetCard';
import AddWidgetCard from './components/AddWidgetButton';
import AddWidgetDrawer from './components/AddWidgetDrawer';

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.widgets);

  return (
    <div className='bg-gray-200'>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-3 md:py-6 lg:py-8 xl:py-10 xl:pb-24'>
        <DashboardHeader onClick={() => setDrawerOpen(true)} />

        <div className='flex flex-col gap-6 md:gap-8 mt-4  md:mt-6 lg:mt-10'>
          {categories?.map((category) => (
            <div key={category.name}>
              <h2 className="text-sm md:text-base font-roboto font-bold text-gray-900">{category.name}</h2>
              <div className='mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
                {category.widgets.map((widget) => (
                  <WidgetCard
                    key={widget.id}
                    id={widget.id}
                    name={widget.name}
                    text={widget.text}
                    onRemove={(id) => dispatch(removeWidget({ categoryName: category.name, id }))}
                  />
                ))}
                <AddWidgetCard onClick={() => setDrawerOpen(true)} />
              </div>
            </div>
          ))}
        </div>
       
      </div>

      <AddWidgetDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        tabValue={tabValue}
        setTabValue={setTabValue}
      />
    </div>
  );
}
