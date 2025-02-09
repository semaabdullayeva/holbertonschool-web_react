import React from 'react';



var user = {
    email: "",
    password: "",
    isLoggedIn: false,
};

const logOut = () => {};

const newContext = React.createContext({
    user,
    logOut
});

export default newContext;