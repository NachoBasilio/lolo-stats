import { configureStore } from '@reduxjs/toolkit';
import habitosSlice from './slice/Habitos/habitosSlice';

const rootReducer = {
  habitos: habitosSlice,
  // Agrega más slices si es necesario
};

export const store = configureStore({
  reducer: rootReducer,
});
