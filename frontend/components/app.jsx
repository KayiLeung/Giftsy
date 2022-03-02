import React from "react";
import { Switch , Route} from "react-router-dom";
import { AuthRoute } from "../util/route_until";
import UserShowContainer from './userShowPage/user_show_page_container'
import SplashContainer from './splash/splash_container'
import Modal from "./modal/modal";


const App = () => (
    <div>
        <Modal />
        <section>
            <SplashContainer />
        </section> 

        <Switch>
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <Route path='/users/:userId' component={UserShowContainer} />

        </Switch>
    </div>
);


export default App;