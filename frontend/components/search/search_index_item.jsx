import React from "react";
import {Link } from 'react-router-dom';

class SearchIndexItem extends React.Component{

    render(){
        const {product} = this.props;

        return (
            <div className='search-item'>
                <div className='search-result'>
                    <Link to={`/products/${product.id}`}>
                        <img className='search-result-img'src={product.photoUrl} alt="" />
                    </Link>
                </div>
                <div className='search-result-details'>
                    <ul>
                        <li className='result-name'>{product.title}</li>
                        <li className='result-price'>${product.price}</li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default SearchIndexItem