import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';
import notificationReducer from '../features/notifications/notificationSlice';
import coursesReducer from '../features/courses/coursesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationReducer,
  courses: coursesReducer,
});

export default rootReducer;