import React from "react";
import { Switch , Route} from "react-router-dom";
import { AuthRoute } from "../util/route_until";
import Modal from "./modal/modal";

import UserShowContainer from './userShowPage/user_show_page_container'
import SplashContainer from './splash/splash_container'
import NavigrationBar from "./nav_bar/nav_bar";
import ProductIndexContainer from './products/product_index_container'

import Footer from "./footer/footer";




const App = () => (
    <div className='app'>
        <Modal />
            {/* <NavigrationBar /> */}
        <SplashContainer />
        <ProductIndexContainer/>
        <Switch>
            <Route path='/users/:userId' component={UserShowContainer} />
            {/* <Route path='/products/:productId' component={ProductShowContainer} /> */}
        </Switch>
        <Footer />
    </div>
);


export default App;