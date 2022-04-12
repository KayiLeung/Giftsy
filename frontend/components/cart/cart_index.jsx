import React, { Componet } from "react";

import OrderFormContainer from '../order/order_form_container'
import { Link } from 'react-router-dom';
import CartEditContainer from './cart_edit_container'

class CartIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchAllCarts()
        this.props.fetchAllProducts()
    }



    render() {
        const { carts, products } = this.props
        if (Object.values(products).length === 0 || !carts) return null;
        // if (Object.values(products).length === 0 || carts.length === 0) return null;
        let total = 0
        return (
            <div className='cart-index-container'>
                <div className='cart-header'>
                    { carts.length <= 1 ?
                        (<h1>{carts.length} item in the cart</h1>) : (<h1>{carts.length} items in the cart</h1>) 
                    }

                    <Link to='/'><p>Keep shopping</p></Link>
                </div>
                <div className='cart-item-wrapper'>

                    <div className='cart-item-box'>
                        {
                            carts.map((cartItem, idx) => {
                                let itemDetails = products[cartItem.product_id]
                                let amount = (itemDetails.price * cartItem.quantity * 1.00)
                                total += amount
                                return (
                                    <div className='cart-item-thumbnail' key={idx}>
                                        <img className='cart-item-img' src={itemDetails.photoUrl} />
                                        <div className='cart-item-details'>
                                            <ul>
                                                <li id='cart-title'>{itemDetails.title}</li>
                                                <div className='order-cart'>
                                                {console.log(cartItem)}
                                                <CartEditContainer
                                                    cart={cartItem}
                                                    />
                                                </div>
                                                {/* <li id='cart-quantity'>{cartItem.quantity}</li> */}
                                                <li id='cart-amount'>$ {amount}</li>
                                                
                                                <li id='return'>Returns not accepted</li>
                                                <button className='remove-item' onClick={() => this.props.deleteCart(cartItem.id)} >Remove</button>
                                            </ul>
                                        </div>
                                    </div>
                                )
                                
                            })
                        }
                    
                    </div>
                    <OrderFormContainer
                        carts={carts}
                        products={products}
                        total={total}
                    />
                    
                </div>
                {/* <div className='check-out-wrapper'>
                    <div className='check-out-box'>
                        <ul>
                            <li className='order-header'>How you'll pay</li>
                            <form className="place-order">
                                <div className='radio-button'>
                                    <input type='radio' /><label><img width='50%' src="https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/25928-1-credit-card-visa-and-master-card-file.png" alt="" /></label>
                                </div>
                                <div className='radio-button'>
                                    <input type="radio" /><label><img width='25%' src="https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/580b57fcd9996e24bc43c530.png" alt="" /></label>
                                </div>
                                <div className='total-amount'>
                                    <li>Item(s) total</li>
                                    <li>$33.00</li>
                                </div>
                                <div className='shipping'>
                                    <li id='shipping'>Shipping</li>
                                    <li id='free' color='green'>FREE</li>
                                </div>
                                <hr />
                                <div className='summary'>
                                    {carts.length <= 1 ?
                                        (<li>{carts.length} Total( {carts.length} item)</li>) : (<li>{carts.length} Total( {carts.length} items)</li>)
                                    }
                                    <li></li>
                                </div>

                                <button>Proceed to checkout</button>
                            </form>
                        </ul>
                    </div>
                </div>
                <p id='delivery'><FaLeaf />Gifty offsets carbon emissions from every delivery</p> */}
            </div>
            
        )
    }
}

export default CartIndex