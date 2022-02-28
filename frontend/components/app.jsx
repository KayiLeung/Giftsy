import React from "react";
import { Switch , Route} from "react-router-dom";
import { AuthRoute } from "../util/route_until";
import LoginFormContainer from './sessionForm/login_form_container'
import SignupFormContainer from './sessionForm/signup_form_container'
import UserShowContainer from './userShowPage/user_show_page_container'
import SplashContainer from './splash/splash_container'
import navBar from "./nav_bar/nav_bar";




const App = () => (
    <div>
        <header>
            <SplashContainer />
        </header>

        <Switch>
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <Route path='/users/:userId' component={UserShowContainer} />

        </Switch>
    </div>
);


// window.dispatch = dispatch
export default App;