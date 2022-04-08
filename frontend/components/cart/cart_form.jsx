// import { tsThisType } from "@babel/types";
import React, { Componet } from "react";

class Cartform extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.product.price)

        this.state = {
            quantity: 1,
        }

        this.addCartItem = this.addCartItem.bind(this)
    }


    addCartItem(e) {

        e.preventDefault();
        debugger
        const { currentUser, product } = this.props
        if (!this.props.currentUser) {
            this.props.openModal('login')
        } else {
            debugger
            const buyerId = currentUser;
            // const productId = product.id;
            const amount = (product.price * this.state.quantity)

            const cart = Object.assign({}, {
                ...this.state,
                buyer_id: buyerId,
                product_id: product.id,
                amount : amount,
                productUrl: product.photoUrl,
                title: product.title
            })
            debugger
            this.props.createCart( cart)
        }

    }





    componentDidMount() {
        // this.props.fetchAllCarts(this.props.currentUser)
        // console.log(this.props.fetchAllCarts(this.props.currentUser))
    }

    update(field) {
        // debugger
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    render() {
        const { currentUser, cart } = this.props
        console.log(`this is the first cart: ${cart}`)
        if (!this.props.product) return null
        return (
            <div>
                <form className='order-form-wrapper' onSubmit={this.addCartItem}>
                    <select name="amount" id="item_quantity" onChange={this.update('quantity')}>
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