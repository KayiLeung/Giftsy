import React from "react";
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import {Redirect} from 'react-router-dom'
import { useState } from "react";
import { SearchIndexContainer } from './search_index_container'



const Search = ({products, fetchAllProducts, history}) => {
    const [filteredData, setFilteredData] = useState([]);

const handleFilter = e => {
    const searchWord = e.target.value;
    const newFilter = products.filter(( product => {
        return product.title.toLowerCase().includes(searchWord.toLowerCase())
    }));
    setFilteredData(newFilter)
}

    return (
            <div className='search-wrap'>
                <div className="search-bar">
                    <form action="" className='nav-bar-search-container' onSubmit={handleSubmit}>
                        <input
                            id="search-input"
                            type="search"
                            placeholder="Search for gift"
                            className='searchTerm'
                            onChange={handleFilter}
                            // onKeyPress={(e) => handleEnterKey(e)}
                        />
                        <button ><FaSearch /></button>
                    </form>
                </div>
            </div>
        )
}

export default Search







