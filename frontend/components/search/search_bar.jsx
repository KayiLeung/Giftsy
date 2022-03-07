import React from "react";


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    
    render() {
        return (
            <form className='search-bar' onSubmit={this.handleSubmit}>
                {/* <input
                type="text" placeholder='search for gift' 
                className='search-bar-input'
                onChange={e => handleChange(e)} 
                value={this.state.query}/> */}
                <input 
                type="text" 
                placeholder='search for gift' 
                className='search-bar-input'
                />
            </form>
        )
    }
}

export default SearchBar;