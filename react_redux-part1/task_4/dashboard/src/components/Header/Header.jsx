import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import logo from '../../assets/holberton-logo.jpg';
import { logout } from '../../features/auth/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={css(styles.header)}>
      <img src={logo} alt="Holberton logo" className={css(styles.headerImg)} />
      <h1 className={css(styles.headerTitle)}>School dashboard</h1>
      
      {isLoggedIn && (
        <section id="logoutSection" className={css(styles.logoutSection)}>
          <p>
            Welcome {user.email}{' '}
            <a href="#" onClick={handleLogout} className={css(styles.logoutLink)}>
              (logout)
            </a>
          </p>
        </section>
      )}
    </header>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e1354b',
    padding: '1rem',
  },
  headerImg: {
    height: '40px',
    width: 'auto',
    marginRight: '1rem',
  },
  headerTitle: {
    color: '#e1354b',
    margin: 0,
    flexGrow: 1,
  },
  logoutSection: {
    marginLeft: 'auto',
  },
  logoutLink: {
    color: '#e1354b',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
});

export default Header;