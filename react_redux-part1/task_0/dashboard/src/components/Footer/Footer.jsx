// Footer.jsx
import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <footer>
      {/* Render the footer content */}
      {isLoggedIn && <a href="/contact-us">Contact us</a>}
    </footer>
  );
};

export default Footer;
