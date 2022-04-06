import React, {Componet} from "react";

class Cartform extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props)

        this.state = {
            quantity: 1,
        }

        this.addCartItem = this.addCartItem.bind(this)
    }


    addCartItem(e) {

        e.preventDefault();

        if (!this.props.currentUser) {
            this.props.openModal('login')
        } else {
            const buyerId = this.props.currentUser;
            const productId = this.props.product.id;

            const cart = Object.assign({}, {...this.state, 
                buyer_id: buyerId,
                product_id: productId
            })
            this.props.createCart(buyerId, cart)
        }

        // if (!this.props.currentUser) {
        //     this.props.openModal('login')
        // } else {
        //     const buyerId = this.props.currentUser;


        //     if (!this.props.fetchAllCarts(buyerId)) {
        //         const productId = this.props.product.id;

        //         const cart = Object.assign({}, {
        //             ...this.state,
        //             buyer_id: buyerId,
        //             product_id: productId
        //         })
        //         this.props.createCart(buyerId, cart)
        //     } else {

        //     }

        // }

        
    }

    componentDidMount(){
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
        const { carts } = this.props
        debugger
        console.log(`this is the first cart: ${carts[0]}`)
        if (!this.props.product || !carts) return null
        debugger
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