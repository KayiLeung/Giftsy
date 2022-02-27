import React from "react";
import { AuthRoute } from "../util/route_until";
import { Routes } from "react-router";

import LogInFormContainer from './sessionForm/login_form_container'
import SignUpFormContainer from './sessionForm/signup_form_container'
import Greeting from "./greeting/greeting";




const App = () => (
    <div>
        <header>
            <h1>Giftsy</h1>
            <Greeting/>

            <LogInFormContainer/>
            {/* <SignUpFormContainer/> */}
        </header>


        {/* <AuthRoute exact path="/login" component={LogInFormContainer} /> */}
    </div>
);


// window.dispatch = dispatch
export default App;