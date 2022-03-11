import React from "react";
import CircleCategoryIndexConstainer from "../category/circle_category_container";
import {Link} from 'react-router-dom'
import { FaShippingFast } from 'react-icons/fa'


class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }
    componentDidMount(){
        // debugger
        this.props.fetchAllProducts()
    }

    render(){
        // debugger
        const sessionLinks = () => (
            <>
                <div className='nav-buttons'>
                    <h2 className="greeting">
                        Find things you'll love. Support independent sellers. Only on Giftsy.
                    </h2>
                </div>
            </>

        );

        const personalGreeting = () => (
            <div>
                <h2 className="greeting">Welcome back, {currentUser.fname}!</h2>
            </div>
        );
  
        
        const {currentUser, logout} = this.props
        return(
            <>
            <header>
                <div>
                    {currentUser ? (
                        <div>
                            {personalGreeting(currentUser, logout)}
                        </div>
                    ) : (
                        <div>
                            {sessionLinks()}
                        </div>
                    )}
                </div>
            </header>
            <section className='circle-cat-section'>
                <div className='circle-container'>
                    <CircleCategoryIndexConstainer/>
                </div>
            </section>
            <section className='product-index-page'>
                <div className='product-show-container'>
                    <div className='product-show-page'>
                        <div className='thumbnail-container'>
                        {
                            this.props.products.map((product, idx) => 
                                <div className={`product-thumbnail`} key={idx}>
                                    <Link to={`/products/${product.id}`}>
                                        <img className="grid-products" src={product.photoUrl} alt="" />
                                    </Link>
                                    <p id='price-tag'> <FaShippingFast />{` $${product.price}`}</p>
                                    
                                </div>
                                )
                        }
                             
                                
                        </div>
                    </div>
                </div>
            </section>
            
            </>
  

        )
    }
}


export default ProductIndex