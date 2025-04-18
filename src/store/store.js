// File: src/redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage

import widgetReducer from '../slices/widgetSlice'; 

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['widgets'], // ✅ Persist only the widgets slice
};

// Combine all reducers
const rootReducer = combineReducers({
  widgets: widgetReducer, 
});

// Apply persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist compatibility
    }),
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
