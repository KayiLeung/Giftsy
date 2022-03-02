import React from "react";
import { ImSearch} from 'react-icon/io5'

class SearchBar extends React.Component {

    
    render() {
        return (
            <form>
                <label className='search-bar'>Search</label>
                <input type="text"
                onChange={e => handleChange(e)} />
                <button className={search-button}><ImSearch/></button>
            </form>
        )
    }
}

export default SearchBar;