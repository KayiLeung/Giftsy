import React from "react";
// import { ImSearch} from 'react-icon/io5'

class SearchBar extends React.Component {

    
    render() {
        return (
            <form className='search-form'>
                <input type="text" placeholder='search for gift'
                onChange={e => handleChange(e)} />
                <button>hi</button>
            </form>
        )
    }
}

export default SearchBar;