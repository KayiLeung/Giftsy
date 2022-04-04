import React, {Componet} from "react";

class Cartform extends Componet {


    render() {
        
        return (
            <div>
            <div>this is cart page</div>

                <form className='order-form-wrapper' >
                <select name="amount" id="">
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
                <button className='cartItem' onClick={this.addCartItem()}>Add to cart</button>
            </form>
            </div>
        )
    }
}

export default Cartform