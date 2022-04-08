import React, { Componet } from "react";


class CartIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchAllCarts()
    }



    render() {

        const { buyerId, cartItems} = this.props

        return (
            <div>
                <h1>You have {cartItems.length} in the cart!</h1>
                    <div className='cart-item-wrapper'>
                        <div className='cart-item-box'>
                        {
                            cartItems.map((cartItem, idx) => {
                                console.log(cartItem)
                                return (
                                    <div className='cart-item-thumbnail' key={idx}>
                                        <img className='cart-item-img' src={cartItem.productUrl} />
                                        <div className='cart-item-details'>
                                            <ul>
                                                <li id='cart-title'>{cartItem.title}</li>
                                                <li id='cart-quantity'>{cartItem.quantity}</li>
                                                <li id='cart-amount'>{cartItem.amount}</li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                            
                            })
                        }        
                        </div>
                    </div>
            </div>
        )
    }
}

export default CartIndex