import React from "react";
import { Switch , Route} from "react-router-dom";
import { AuthRoute } from "../util/route_until";
import Modal from "./modal/modal";

// import UserShowContainer from './userShowPage/user_show_page_container'
import SplashContainer from './splash/splash_container'
import ProductIndexContainer from './products/product_index_container'
import ProductShowContainer from './products/product_show_container'
import SearchIndexContainer from './search/search_index_container'

import Footer from "./footer/footer";
import CategoryShowContainer from '../components/category/category_show_container'
import BottomNavBarContainer from "./nav_bar/bottom_nav_bar_container";




const App = () => (
    <div className='app'>
        <Modal />
        <SplashContainer />
        <BottomNavBarContainer/>
        <Switch>
            <Route exact path="/" component={ProductIndexContainer}/>
            <Route path='/search' component={SearchIndexContainer} />
            <Route exact path="/categories/:categoryId" component={CategoryShowContainer}/>
            <Route path='/products/:productId' component={ProductShowContainer} />
        </Switch>
        <Footer />
    </div>
);


export default App;