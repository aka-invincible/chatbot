import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../slices/studentSlice';

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});
