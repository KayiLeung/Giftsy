import React from "react";
import { Switch , Route} from "react-router-dom";
import { AuthRoute } from "../util/route_until";
import Modal from "./modal/modal";

import UserShowContainer from './userShowPage/user_show_page_container'
import SplashContainer from './splash/splash_container'
import NavigrationBar from "./nav_bar/nav_bar";
import ProductShowContainer from './products/products_container'




const App = () => (
    <div>
        <Modal />
        <section>
            {/* <NavigrationBar /> */}
            <SplashContainer />
        </section> 

        <Switch>
        {/* <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> */}
        <Route path='/users/:userId' component={UserShowContainer} />
        <Route path='/products/:productId' component={ProductShowContainer} />

        </Switch>
    </div>
);


export default App;