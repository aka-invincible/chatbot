import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    allStudents: [],
    currentStudent: { name: '', age: '', date: '', time: '' },
  },
  reducers: {
    addCurrentStudentName: (state, action) => {
      state.currentStudent.name = action.payload;
    },
    addCurrentStudentAge: (state, action) => {
      state.currentStudent.age = action.payload;
    },
    addCurrentEnrollmentDate: (state, action) => {
      state.currentStudent.date = action.payload;
    },
    addCurrentEnrollmentTime: (state, action) => {
      state.currentStudent.time = action.payload;
    },
    saveStudentInfo: (state) => {
      state.allStudents.push(state.currentStudent);
    },
  },
});

export const { addCurrentStudentName, addCurrentStudentAge, addCurrentEnrollmentDate, addCurrentEnrollmentTime, saveStudentInfo } =
  studentSlice.actions;

export default studentSlice.reducer;
