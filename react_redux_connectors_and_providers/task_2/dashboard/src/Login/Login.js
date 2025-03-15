import React, { useState } from "react";
import { css, StyleSheet } from "aphrodite";

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
    textAlign: "left",
    padding: "20px",
  },
  input: {
    marginRight: "10px",
    marginLeft: "10px",
    border: "none",
  },
  label: {
    marginBottom: "5px",
    display: "inline-block",
  },
  button: {
    display: "block",
    borderColor: "orange",
    background: "none",
  },
  form: {
    display: "flex",
    alignItems: "center",
  },
});


function Login({ logIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(email, password);
  };

  const handleChange = (event) => {
    if (email.trim() !== "" && password.trim() !== "") {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };
  return (
    <>
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <div className={css(styles.form)}>
            <label className={css(styles.label)}>Email: </label>
            <input
              className={css(styles.input)}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value); //the actual thing being typed
                handleChange();
              }}
              required
            />
          </div>
          <div className={css(styles.form)}>
            <label className={css(styles.label)}>Password: </label>
            <input
              className={css(styles.input)}
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                handleChange();
              }}
              required
            />
          </div>

          <input
            type="submit"
            className={css(styles.button)}
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    </>
  );
}

export default Login;
