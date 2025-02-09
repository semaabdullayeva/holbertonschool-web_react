import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { getFooterCopy, getCurrentYear } from '../../utils/utils';

const Footer = () => {
  // Get isLoggedIn state from Redux store
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <footer className={css(styles.footer)} data-testid="footer">
      <p className={css(styles.copyright)}>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
      {isLoggedIn && (
        <p className={css(styles.contact)}>
          <a href="#" className={css(styles.contactLink)}>
            Contact us
          </a>
        </p>
      )}
    </footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderTop: '3px solid #e1354b',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    backgroundColor: 'white',
    padding: '1rem 0',
  },
  copyright: {
    margin: 0,
  },
  contact: {
    margin: '0.5rem 0 0 0',
  },
  contactLink: {
    color: '#e1354b',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
});

export default Footer;