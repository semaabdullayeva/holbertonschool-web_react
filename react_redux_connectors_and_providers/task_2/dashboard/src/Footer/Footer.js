import React, { useContext } from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { connect } from "react-redux";

function Footer({ user }) {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="/contact">Contact us</a>
        </p>
      )}
    </footer>
  );
}

const mapStateToProps = (state) => ({
  user: state.get("user"),
});

export default connect(mapStateToProps)(Footer);
