import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import Notifications from './components/Notifications/Notifications';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import Footer from './components/Footer/Footer';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      <Notifications />
      <div className={css(styles.app)}>
        <Header />
        <div className={css(styles.body)}>
          {isLoggedIn ? (
            <CourseList />
          ) : (
            <Login />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    flex: 1,
    padding: '2rem',
  }
});

export default App;