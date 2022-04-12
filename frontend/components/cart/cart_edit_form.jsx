import React, { Componet } from "react";


class CartEditForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.cart
        this.updateCartItem = this.updateCartItem.bind(this)
    }


    updateCartItem(e) {
        e.preventDefault();
        this.props.updateCart(this.state)
    }


    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }



    render() {
        const { cart} = this.props
        if (!cart ) return null
        return (
            <div>
                <form className='order-form-wrapper' onSubmit={this.updateCartItem}>
                    <select name="subamount" id="item_quantity" onChange={this.update('quantity')}>
                        <option value={cart.quantity}>{cart.quantity}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <button className='cartItemBtn' type='submit'>Update Item(s)</button>
                </form>
            </div>
        )
    }
}

export default CartEditForm

