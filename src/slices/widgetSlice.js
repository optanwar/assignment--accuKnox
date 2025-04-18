import { createSlice, nanoid } from '@reduxjs/toolkit';
import widgetData from '../json/widgets.json';


const generateWidgetsWithIds = (widgets) =>
  widgets.map((widget) => ({ id: nanoid(), ...widget }));

const initialState = {
  categories: [
    {
      name: 'CSPM Executive Dashboard',
      widgets: generateWidgetsWithIds(widgetData['CSPM Executive Dashboard']),
    },
    {
      name: 'CWPP Dashboard',
      widgets: generateWidgetsWithIds(widgetData['CWPP Dashboard']),
    },
  ],
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    // Add widget 
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.categories.find((cat) => cat.name === categoryName);
      const newWidget = { id: nanoid(), ...widget };
      if (category) {
        category.widgets.push(newWidget);
      }
    },

    // Remove widget 
    removeWidget: (state, action) => {
      const { categoryName, id } = action.payload;
      const category = state.categories.find((cat) => cat.name === categoryName);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== id);
      }
    },

    
    addCategory: (state, action) => {
      const { name } = action.payload;
      const exists = state.categories.some((cat) => cat.name === name);
      if (!exists) {
        state.categories.push({ name, widgets: [] });
      }
    },
  },
});

export const { addWidget, removeWidget, addCategory } = widgetSlice.actions;
export default widgetSlice.reducer;
