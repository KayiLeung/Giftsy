
import React from 'react';
import SearchIndexItem from './search_index_item';
import { Link } from 'react-router-dom';




const SearchIndex = ({ filteredProducts}) => {

    return (
        filteredProducts.length === 0 ? (
        
        <div className='search-container'>
            <h1>Sorry, result no found, search again?</h1>
        </div>) :
        (
        
        <div className='search-container'>
            <h1> {filteredProducts.length} item(s) found: </h1>

        

            <div className='search-wrapper'>
                {
                    filteredProducts.map((product, idx) => {
                        return(
                        <div className='search-item'>
                            <div className='search-result'>
                                <Link to={`/products/${product.id}`}>
                                    <img className='search-result-img' src={product.photoUrl} alt="" key={idx} />
                                </Link>
                            </div>
                            <div className='search-result-details'>
                                <Link to={`/products/${product.id}`}>
                                <ul>
                                    <li className='result-name'>{product.title}</li>
                                    <li className='result-price'>${product.price}</li>
                                </ul>
                                </Link>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>)
    )

    // return (
    //     filteredProducts.length === 0 ? (<div>No result found! Search again?</div>) :
    //     (
    //         <div>
    //         {
    //             filteredProducts.map((product, idx) => {
    //             return (
    //                 <div>

    //                 </div>
    //             )
    //         } 

        
        
    //         }

    //         </div>
    //     )
    // )
}


export default SearchIndex;

