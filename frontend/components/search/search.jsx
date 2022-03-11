import React from "react";
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'


class Search extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = {
            query: "",
            search: false,
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount() {
    //     debugger
    //     this.props.fetchAllProducts();
    // }

    // handleChange = (property) => {
    //     return e => this.setState({
    //         [property] : e.currentTarget.value
    //     })
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.setState({'search': true})
    // }

    // handleEnterKey(e) {
    //     if (e.key === "Enter"){
    //         this.handleSubmit(e);
    //     } 
    // }

    // componentDidUpdate(){
    //     if (this.state.search === true) {
    //         this.setState({search: false})
    //     }
    // }

    render() {
   
        return (
            <div className='search-wrap'>
                <div className="search-bar">
                    <form action="" className='nav-bar-search-container'>
                        <input
                            id="search-input"
                            type="search"
                            placeholder="Search for gift"
                            className='searchTerm'
                            // onChange={this.handleChange("query")}
                            // onKeyPress={(e) => this.handleKeypress(e)}
                        />
                        <button
                            className="search-icon-button"
                            // onClick={(e) => this.handleSubmit(e)}
                        >
                            <FaSearch />
                        </button>
                    </form>

                    {/* {this.state.search ?
                        <Redirect to={{
                            pathname: '/search',
                            state: { stateName: this.state.query },
                            search: "?" + this.state.query,
                            fetchProducts: this.props.fetchProducts,
                        }} /> : null} */}
                </div>
            </div>
        )
    }
}

export default Search;
