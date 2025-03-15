import React, { Component } from "react";
import PropTypes from "prop-types";
import BodySection from "./BodySection";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    marginBottom: "40px",
  },
});
class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.body)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
