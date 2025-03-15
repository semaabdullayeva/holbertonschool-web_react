import React from 'react';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = ({ title, children }) => {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection title={title}>{children}</BodySection>
      </div>
    );
  };

  BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
  };
  
  BodySectionWithMarginBottom.defaultProps = {
    children: null,
  };

  const styles = StyleSheet.create({
    bodySectionWithMargin: {
      marginBottom: '40px', 
    },
  });
  
  export default BodySectionWithMarginBottom;
