import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<Root store={store} />, rootEl)
})

// window.signup = signup;
// window.login = login;
// window.logout = logout;

// window.user1 = {
//                 email: 'user1@test.com', 
//                 fname: 'emma', 
//                 lname: 'edward', 
//                 password:'password'
//                }