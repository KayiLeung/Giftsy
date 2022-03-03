import React from "react";

class ProductIndex extends React.Component {
    constructor(props) {
        super(props)
        // debugger
    }
    componentDidMount(){
        // debugger
        this.props.fetchAllProducts()
    }

    render(){
        // debugger
        return(
        <div className='product-show-container'>
            <div className='product-show-page'>
                <div className='thumbnail-container'>
                {
                    this.props.products.map((product, idx) => 
                        <div className='product-thumbnail' key={idx}>
                        <p>The cost of {product.title} ${product.price}</p>
                        </div>
                        )
                }
                <h1>this is product index page</h1>
                </div>
            </div>
        </div>
        )
    }
}


export default ProductIndex