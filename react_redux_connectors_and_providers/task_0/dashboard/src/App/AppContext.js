import React from "react";

const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const defaultLogOut = () => {
  console.log("Bye!");
};

const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export { defaultLogOut, defaultUser };
export default AppContext;
