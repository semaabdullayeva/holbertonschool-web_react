import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import notificationReducer from '../features/notifications/notificationSlice';
import coursesReducer from '../features/courses/coursesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notifications: notificationReducer,
    courses: coursesReducer,
  },
});