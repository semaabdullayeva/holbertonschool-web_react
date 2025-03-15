// src/Login/Login.jsx
import React, { useState } from 'react';
import WithLogging from '../../components/HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';
import useLogin from '../../hooks/useLogin';


const Login = (props) => {


    const {
      formData,
      enableSubmit,
      handleChangeEmail,
      handleChangePassword,
      handleLoginSubmit,
    } = useLogin(props.logIn);


    const { email, password } = formData;


    return (
      <div className={css(styles.Appbody)}>
        <div className={css(styles.longbr)}></div>
        <p>Login to access the full dashboard</p>
        <form
          className={css(styles.Appbodyform)}
          onSubmit={handleLoginSubmit}
        >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
            className={css(styles.button, !enableSubmit && styles.disabled)}
          />
        </form>
      </div>
  );
};


const styles = StyleSheet.create({
  Appbody: {
    marginTop: '20px',
  },

  longbr: {
    borderTop: '1px solid red',
    marginBottom: '20px',
  },
  
  Appbodyform: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  
  button: {
    marginTop: '15px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      fontSize: '14px',
    },
    ':hover': {
      backgroundColor: '#0056b3',
    },
  }, 
  disabled: {
    backgroundColor: "#c0c0c0",
    cursor: "not-allowed",
  },
});


export default WithLogging(Login);