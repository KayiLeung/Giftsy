import React from "react";
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import { Redirect } from 'react-router-dom'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            searchRes: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFilter = (e) => {
        this.setState({query: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            searchRes: true
        })
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    handleEnterKey = e => {
        if (e.key === 'enter') {
            this.props.handleSubmit(e)
        }
    }

    componentDidUpdate(){
        if (this.state.searchRes === true) {
            this.setState({ searchRes: false})
        }
    }




    render() {
        return (
            <div className='search-wrap'>
                <div className="search-bar">
                    <form action="" className='nav-bar-search-container' onSubmit={this.handleSubmit}>
                        <input
                            id="search-input"
                            type="search"
                            placeholder="Search for gift"
                            className='searchTerm'
                            onChange={this.handleFilter}
                            onKeyPress={(e) => this.handleEnterKey(e)}
                        />
                        <button onClick={this.handleSubmit}><FaSearch /></button>
                    </form>
                    {this.state.searchRes ?
                        <Redirect to={{
                            pathname: '/search',
                            state: { stateName: this.state.query },
                            search: `?search=${this.state.query}` , 
                        }} /> : null}
                </div>
            </div>
        )
    }
}


export default Search