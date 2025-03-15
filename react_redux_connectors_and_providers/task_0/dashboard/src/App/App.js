import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import AppContext, { defaultUser } from "./AppContext";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import { connect } from "react-redux";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "default", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

const styles = StyleSheet.create({
  app: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: "rgb(255, 255, 255)",
    justifyContent: "space-between",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  },
  body: {
    flexGrow: 1,
    padding: "20px",
  },
  footer: {
    alignSelf: "stretch",
    borderTopStyle: "solid",
    borderColor: "#e62d2d",
    fontStyle: "italic",
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "default", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ],
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.logOut();
    }
  };
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  logOut() {
    this.setState({
      user: defaultUser,
    });
    console.log("User gone");
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notification) => notification.id !== id
      ),
    });
  }

  render() {
    const { user, displayDrawer, listNotifications } = this.state;
    const { isLoggedIn } = this.props;

    return (
      <AppContext.Provider value={{ user: user, logOut: this.logOut }}>
        <Notifications
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.body)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  logOut: PropTypes.func,
};
App.defaultProps = {
  logOut: () => {},
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.get("isUserLoggedIn"),
});

export default connect(mapStateToProps)(App);
