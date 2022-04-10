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
        const { currentUser, product , carts} = this.props
        // if (!this.props.currentUser) {
        //     this.props.openModal('login')
        // } else {
        //     debugger
        //     const buyerId = currentUser;
        //     // const productId = product.id;
        //     debugger
        //     const cart = Object.assign({}, {
        //         ...this.state,
        //         buyer_id: buyerId,
        //         product_id: product.id,
        //         price: product.price,
        //         productUrl: product.photoUrl,
        //         title: product.title
        //     })
        //     debugger
        //     this.props.createCart(cart)
        // }
        // carts.forEach(cart => {
        //     if (cart.product_id === cart.id && cart.quantity !== this.state.quantity) {
        //         const rating = Object.assign(this.state)
        //         debugger
        //         this.props.updateCart(cart);
        //     } else {
        //         const buyerId = currentUser;

        //         const cart = Object.assign({}, {
        //             ...this.state,
        //             buyer_id: buyerId,
        //             product_id: product.id,
        //             price: product.price,
        //             productUrl: product.photoUrl,
        //             title: product.title
        //         })
        //         this.props.createCart(cart)
        //     }
           
        // })
        let cartExist = false
        let oldcart = {}
        carts.forEach (cart => {
            if (cart.product_id === product.id) {
                cartExist = true
                oldcart = cart
                debugger
            }
        })
        if (cartExist) {
            oldcart.quantity = this.state.quantity
            debugger
            this.props.updateCart(oldcart)
                .then(res => console.log(this.props.history))
        } else {
            const buyerId = currentUser;

                const cart = Object.assign({}, {
                    ...this.state,
                    buyer_id: buyerId,
                    product_id: product.id
                })
                debugger
                this.props.createCart(cart)
                    .then(res => console.log(this.props.history))
                    // .then(res => this.props.history.push(`/products/${product.product_id}`), console.log('push'))
                
        }
    }





    componentDidMount() {
        this.props.fetchAllCarts(this.props.currentUser)
        // console.log(this.props.fetchAllCarts(this.props.currentUser))
    }

    update(field) {
        debugger
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    render() {

        if (!this.props.product ) return null
        debugger
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