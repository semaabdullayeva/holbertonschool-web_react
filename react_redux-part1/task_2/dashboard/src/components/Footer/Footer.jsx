import React, { useContext } from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';
import newContext from '../../Context/context';

const Footer = () => {
  const { user } = useContext(newContext);

  return (
    <footer className="App-footer">
      <div className="long-br"></div>
      <p>
        Copyright {getCurrentYear()} {getFooterCopy(true)}
      </p>
      {user?.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
