import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isSelected: false
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    selectCourse: (state, action) => {
      const course = state.items.find(course => course.id === action.payload);
      if (course) {
        course.isSelected = true;
      }
    },
    unSelectCourse: (state, action) => {
      const course = state.items.find(course => course.id === action.payload);
      if (course) {
        course.isSelected = false;
      }
    },
    setCourses: (state, action) => {
      state.items = action.payload;
    }
  }
});

export const { selectCourse, unSelectCourse, setCourses } = courseSlice.actions;

export const fetchCourses = () => async (dispatch) => {
  const response = await fetch('/api/courses');
  const data = await response.json();
  dispatch(setCourses(data));
};

export default courseSlice.reducer;