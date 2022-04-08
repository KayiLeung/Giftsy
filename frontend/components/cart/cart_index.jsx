import React, { Componet } from "react";
import { FaLeaf} from 'react-icons/fa'
import {OrderFormContainer} from '../order/order_form_container'
import { Link } from 'react-router-dom';

class CartIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchAllCarts()
        this.props.fetchAllProducts()
    }



    render() {
        const { buyerId, cartItems, products } = this.props
        if (!products && !cartItems) return null;
        debugger
        return (
            <div>
                <div className='cart-item-wrapper'>
                    <div className='cart-header'>
                        <h1>{cartItems.length} item in the cart</h1>
                        <Link to='/'><p>Keep shopping</p></Link>
                    </div>

                    <div className='cart-item-box'>
                        {
                            cartItems.map((cartItem, idx) => {
                                let itemDetails = products[cartItem.product_id]
                                let amount = (itemDetails.price * cartItem.quantity * 1.00)
                                return (
                                    <div className='cart-item-thumbnail' key={idx}>
                                        <img className='cart-item-img' src={itemDetails.photoUrl} />
                                        <div className='cart-item-details'>
                                            <ul>
                                                <li id='cart-title'>{itemDetails.title}</li>
                                                {/* <li id='cart-title'>Baby Bear Hat, Diaper Cover and Booties - Baby Photo Prop - Baby Shower Gift - Baby Bear Hat - Available in 0 to 6 Months - Any Color Combo</li> */}
                                                <li id='cart-quantity'> {cartItem.quantity}</li>
                                                <li id='cart-amount'>$ {amount}</li>
                                                {/* <li id='cart-amount'>$66.00</li> */}
                                                <li id='return'>Returns not accepted</li>
                                                <button className='remove-item'>Remove</button>
                                            </ul>
                                        </div>
                                    </div>
                                )
                                
                            })
                        }
                    <p id='delivery'><FaLeaf/>Gifty offsets carbon emissions from every delivery</p>
                    </div>
                </div>
                <div>
                    {/* <OrderFormContainer/> */}
                </div>
            </div>

            
        )
    }
}

export default CartIndex