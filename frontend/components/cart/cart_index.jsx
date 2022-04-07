import React, { Componet } from "react";


class CartIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchAllCarts()
    }

    render() {
        // if (!cartItems) return null
        const { buyerId, cartItems, products} = this.props
        console.log(`this is cartItems: ${cartItems.length}`)
        // cartItems.forEach(cartItem => console.log(cartItem))
        return (
            <div>
                {
                    cartItems.length === 0 ? (<div>The cart is empty!!</div>) :
                        (
                            
                        <div>The cart is not empty!! You have {cartItems.length} in the cart!</div>
                        )
                }



            </div>
        )
    }
}

export default CartIndex