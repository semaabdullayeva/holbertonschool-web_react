import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const {
    formData,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit
  } = useLogin();

  return (
    <div className={css(styles.loginContainer)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleSubmit} className={css(styles.form)}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChangeEmail}
            className={css(styles.input)}
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChangePassword}
            className={css(styles.input)}
          />
        </div>
        <button
          type="submit"
          disabled={!enableSubmit}
          className={css(styles.button, !enableSubmit && styles.buttonDisabled)}
        >
          OK
        </button>
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '400px',
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  input: {
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#0066cc',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#0052a3',
    },
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
    ':hover': {
      backgroundColor: '#cccccc',
    },
  },
});

export default Login;