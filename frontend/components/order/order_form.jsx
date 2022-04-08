
import React from "react";

class OrderForm extends React.Component {


    render(){

        <div className='check-out-wrapper'>
            <div className='check-out-box'>
                <ul>
                    <li>How you'll pay</li>
                    <form action="">
                    <input type="radio" /><label>Visa</label>
                    <input type="radio" /><label>PayPal</label>
                    <div className='total-amount'>
                        <li>Item(s) total</li>
                        <li>$33.00</li>
                    </div>
                    <div className='shipping'>
                        <li id='shipping'>Shipping</li>
                        <li id='free'>FREE</li>
                    </div>
                    <hr />
                    <div className='summary'>
                        <li>Total(1 item)</li>
                        <li>$33.00</li>
                    </div>

                    <button>Proceed to checkout</button>
                    </form>
                </ul>
            </div>
        </div>
    }
}


export default OrderForm