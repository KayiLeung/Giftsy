
import React from "react";
import { Redirect } from 'react-router-dom'
import { FaLeaf } from 'react-icons/fa'
import { Link } from 'react-router-dom'

class OrderForm extends React.Component {
    constructor(props){
        super(props)
        this.state =  {
            payment : null
        }
 
        this.handleCheckOut = this.handleCheckOut.bind(this)
    }

    handleCheckOut(e){
        e.preventDefault();
        console.log(`handlecheckout :${this.state.payment}`)
        const {carts, deleteCart} = this.props
        // if (carts.length === 0) {
        //     alert("Cart is empty")
        // } else {
        //     carts.map((cart) =>{
        //         deleteCart(cart.id)
        //     }) 
        //     .then(alert('Order Placed!'))
        //     .then(<Redirect to='/'/>)
        // }

        if (carts.length === 0 ) {
            alert("Cart is empty")
        } else if (this.state.payment === null) {
            alert('Please select payment method')
        } else {
            carts.map((cart) => {
                deleteCart(cart.id)
            })
                .then(alert('Order Placed!'))
                .then(<Redirect to='/' />)

        }
            
    }

    handlePayment(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }


    componentDidMount() {
        this.props.fetchAllCarts()
    }
    render(){
        const {carts, total} = this.props
        return(
        <div>
       
        <div className='check-out-wrapper'>
            <div className='check-out-box'>
                <ul>
                    <li className='order-header'>How you'll pay</li>
                    <form className="place-order">
                        <div className='radio-button' onChange={this.handlePayment('payment')}>
                            <input type='radio' name='payment' value='visa'/><label><img width='50%'src="https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/25928-1-credit-card-visa-and-master-card-file.png" alt="" /></label>
                            <input type="radio" name='payment' value='paypal'/><label><img width='50%'src="https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/580b57fcd9996e24bc43c530.png" alt="" /></label>
                        </div>
              
                    <div className='total-amount'>
                        <li>Item(s) total</li>
                        <li>${total.toFixed(2)}</li>
                    </div>
                    <div className='shipping'>
                        <li id='shipping'>Shipping</li>
                        <li id='free' color='green'>FREE</li>
                    </div>
                    <hr />
                    <div className='summary'>
                        <li>Total({carts.length} item)</li>
                                    <li>${total.toFixed(2)}</li>
                    </div>

                    <button className='check-out' onClick={this.handleCheckOut}>Proceed to checkout</button>
                        
           
                    </form>
                </ul>
            </div>
        </div>
        </div>
        )
    }
}


export default OrderForm