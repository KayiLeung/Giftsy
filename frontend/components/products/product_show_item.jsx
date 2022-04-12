import React from "react";
import RatingFormContainer from "../rating/rating_create_container";
import RatingIndexContainer from '../rating/rating_index_container'
import CartFormContainer from '../cart/cart_container'
import { FcCheckmark } from 'react-icons/fc'
import { FaShippingFast, FaHourglassHalf } from 'react-icons/fa'

class ProductShowPage extends React.Component{
    constructor(props){

        super(props)
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
        this.props.fetchUsers();
    }

    render() {
        const { product, users, buyerId} = this.props;
        if (!product) {
            return null;
        }
        return (
            <div className='product-whole-container'>
            <div className='product-show-page'>
                <div className='left-container'>
                    <img className="product-show-image" src={product.photoUrl}  />
                </div>
                <div className='right-container'>
                    <div className='product-show-details-div'>
                        <ul className='product-show-details'>
                            <li className='review'>1451 sales ★★★★★</li>
                            <br />
                            <li className='product-title'>{product.title}</li>
                            <br />
                            <li className='description'>{product.description}</li>
                            <br />
                            <li className='price'>${product.price}+</li>
                            <br />
                            {product.quantity ? <li><FcCheckmark /> In stock</li> : <li>out of stock!</li>}
                        </ul>
                        <CartFormContainer
                            product={product}
                            buyerId={buyerId}
                        />
                        <br />
                        <ul className='shipping'>
                            <li><FaHourglassHalf /> <p> Selling fast! </p> <p>Only {product.quantity} left! </p></li>
                                <li><FaShippingFast /> <p> Hooray! </p><p>This item ships free.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className='bottom-container'>
                <div className='rated-reviews'>
                <RatingIndexContainer
                    product={product}
                    users={users}
                    key={`index-${product.id}`}
                />
                {/* pass in report index? */}
            </div>
                <br /><br />
                    <div className='rated-form'>
                    <RatingFormContainer
                        product={product}
                        users={users}
                        key={`form-${product.id}`}
                    />
                    </div>
                </div>
            </div>
        )
    }

}


export default ProductShowPage;