import React, { Componet } from "react";


class CartIndex extends React.Component {
    constructor(props){
        console.log(`this is cart index: ${props}`)
        super(props)
    }

    componentDidMount(){
        // this.props.fetchCart()
    }
    render() {
        const {buyerId} = this.props
        console.log(buyerId)
        return (
            <div>this is cart index: </div>
        )
    }
}

export default CartIndex