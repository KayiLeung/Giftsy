import React from "react";
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            search: false,
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    handleChange = (field) => {
        return e => this.setState({
            [field] : e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        history.replace('/search/${state.query}')
    }

    handleEnterKey(e) {
        if (e.key === "Enter"){
            this.handleSubmit(e);
        } 
    }

    render() {
        const { products } = this.props
        return (
            <div>
            <label className='search-bar' htmlFor='search-bar-input'></label>
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
                <FaSearch />
            </div>
        )
    }
}

export default Search;