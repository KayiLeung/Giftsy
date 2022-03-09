import React from "react";
import RatingFormContainer from "../rating/rating_create_container";
import RatingIndexContainer from '../rating/rating_index_container'

class ProductShowPage extends React.Component{
    constructor(props){

        super(props)
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)
        this.props.fetchUsers();
    }

    render() {
        const {product, users } = this.props;
        if (!product) {
            return null;
        }
        // debugger
        return (
            <div className='product-show-container'>
                <div className='product-show-image-div'>
                    <img className="product-show-image" src={product.photoUrl} alt="" />
                    <div className='product-show-details-div'>
                        <ul className='product-show-details'>
                                <li className='review'>1451 sales ★★★★★</li>
                                <li className='product-title'>{product.title}</li>
                                <li className='description'>{product.description}</li>
                                <li className='price'>${product.price}+</li>
                        </ul>
                    </div>
                </div>
            <RatingIndexContainer
                product={product}
                users={users}
                key={`index-${product.id}`}
            />
            {/* pass in report index? */}
            <br /><br />
            <RatingFormContainer
                product={product}
                users={users}
                key={`form-${product.id}`}
            />

            </div>
        )
    }

}


export default ProductShowPage;