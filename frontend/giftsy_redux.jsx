import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
import { login, logout, signup } from "./util/session_api_util";

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<Root store={store} />, rootEl)

    // window.store = store;
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
})



// window.user1 = {
//                 email: 'user1@test.com', 
//                 fname: 'emma', 
//                 lname: 'edward', 
//                 password:'password'
//                }