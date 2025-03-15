import React, { Component } from "react";
import logo from "../assets/holberton-logo.jpg";
import { css, StyleSheet } from "aphrodite";
import { connect } from "react-redux";
import { logout } from "../actions/uiActionCreators";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomStyle: "solid",
    borderColor: "#e62d2d",
    marginTop: "10px",
  },
  h1: {
    color: "#e62d2d",
    alignSelf: "center",
    fontSize: "xx-large",
  },
  logo: {
    height: "150px",
    justifyContent: "left",
    alignSelf: "left",
    marginBottom: "10px",
  },
  logOut: {
    alignSelf: "flex-end",
  },
});
class Header extends Component {
  render() {
    const { user, logout } = this.props;

    return (
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logOut)}>
            <p>
              Welcome {user.email}{" "}
              <a href="#" onClick={logout}>
                (logout)
              </a>
            </p>
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.get("user"),
});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
