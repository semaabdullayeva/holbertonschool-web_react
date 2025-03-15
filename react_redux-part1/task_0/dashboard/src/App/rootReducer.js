import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import notificationsSlice from '../features/notifications/notificationsSlice';
import coursesSlice from '../features/courses/coursesSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  notifications: notificationsSlice,
  courses: coursesSlice,
});

export default rootReducer;
