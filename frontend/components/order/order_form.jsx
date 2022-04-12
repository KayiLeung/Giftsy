
import React from "react";

import { FaLeaf } from 'react-icons/fa'

class OrderForm extends React.Component {
    constructor(props){
        super(props)
    }

    handleCheckOut(e){
        e.preventDefault();
        debugger
        const {carts, deleteCart} = this.props
        debugger
        carts.map((cart) =>{
            deleteCart(cart.id)
        }) 
    }

    componentDidMount() {
        this.props.fetchAllCarts()
    }
    render(){
        debugger

        const {carts, total} = this.props
        return(
        <div>
       
        <div className='check-out-wrapper'>
            <div className='check-out-box'>
                <ul>
                    <li className='order-header'>How you'll pay</li>
                    <form className="place-order">
                        <div className='radio-button'>
                            <input type='radio'/><label><img width='50%'src="https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/25928-1-credit-card-visa-and-master-card-file.png" alt="" /></label>
                        </div>
                        <div className='radio-button'>
                        {/* <input type="radio" /><label><FaPaypal/></label> */}
                            <input type="radio" /><label><img width='25%'src="https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/580b57fcd9996e24bc43c530.png" alt="" /></label>
                        </div>
              
                    <div className='total-amount'>
                        <li>Item(s) total</li>
                        <li>${total}</li>
                    </div>
                    <div className='shipping'>
                        <li id='shipping'>Shipping</li>
                        <li id='free' color='green'>FREE</li>
                    </div>
                    <hr />
                    <div className='summary'>
                        <li>Total({carts.length} item)</li>
                        <li>${total}</li>
                    </div>
             
                    <button className='check-out' onClick={this.handleCheckOut}>Proceed to checkout</button>
                        
           
                    </form>
                    
                </ul>
            </div>
        </div>
            {/* <p id='delivery'><FaLeaf />Gifty offsets carbon emissions from every delivery</p> */}
        </div>
        )
    }
}


export default OrderForm