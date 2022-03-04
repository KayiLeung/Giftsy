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
                            {/* <p className='grid-products-title'>Title: {product.title}</p> */}
                            <img className="grid-products" src={product.photoUrl} alt="" />
                        </div>
                        )
                }
                </div>
            </div>
        </div>


        )
    }
}


export default ProductIndex