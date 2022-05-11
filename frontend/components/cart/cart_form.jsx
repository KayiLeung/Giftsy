import React, { Componet } from "react";

class Cartform extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 1,
        }

        this.addCartItem = this.addCartItem.bind(this)
    }


    addCartItem(e) {

        e.preventDefault();
        const { currentUser, product , carts } = this.props

        let cartExist = false
        let oldcart = {}
        carts.forEach (cart => {
            if (cart.product_id === product.id) {
                cartExist = true
                oldcart = cart
            }
        })
        if (cartExist) {
            oldcart.quantity = this.state.quantity
            this.props.updateCart(oldcart)
                .then(alert('Cart Updated!'))
        } else {
            const buyerId = currentUser;

                const cart = Object.assign({}, {
                    ...this.state,
                    buyer_id: buyerId,
                    product_id: product.id
                })
                this.props.createCart(cart)
                    .then(alert('Item added!'))
        }
    }





    componentDidMount() {
        this.props.fetchAllCarts(this.props.currentUser)
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    render() {

        if (!this.props.product ) return null
        return (
            <div>
                <form className='order-form-wrapper' onSubmit={this.addCartItem}>
                    <p>Quantity</p>
                    <select name="subamount" id="item_quantity" onChange={this.update('quantity')}>
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
                    <button className='cartItemBtn' type='submit'>Add to cart</button>
                </form>
            </div>
        )
    }
}

export default Cartform