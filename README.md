# Giftsy


## About
Giftsy is a full stack Etsy clone that displays various handmade gifts for sale. Users are able to search for gifts for different occasion.

[Live Demo](https://giftsy.herokuapp.com/)

## Technologies Used

* Ruby on Rails
* HTML
* SCSS
* JavaScript
* React
* Redux
* AWS
* PostgreSQL
* Heroku

## Features

### Create database/Product show page

* Displays products which user can view and select.
* The products are listed in sections of rows which display he products by category or row style

### User shopping cart

* Users may leave rating for an item and leave review if they are logged in.  User are able to edit or delete after reviews are made.

### Leave Product's Rating
* Users can leave/edit/delete products's rating and leave comment

### Search

* Users can search input keyword and search for products

### Future directions

* Create Listing
    ** Users are able have it own shop and create listing

* Order History
    ** Users are able to review order history based on purchase date


## Code Snippet
I was inititially having an issue with search results gone after refreshed page.  This was an issue because the filtered products did not mounted on search index page.  To solve that issue, instead of pass in `fliteredProduct` to `SearchIndexContainer`, I used `Redirect` with customized url so I am able to find the search word by using redux location state.

* Search-2.jsx
```
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
```

* search_index_container.js

```
const mSTP = (state, ownProps) => {
    let filteredProducts = Object.values(state.entities.products)
        .filter(product => product.title.toLowerCase().includes(ownProps.location.search.slice(8).toLowerCase()))
    return {
            filteredProducts,
    }
}
```


## Licensing
Please note that none of these assets are mine. I do not claim any of the images featured on Gifysy and I do not gain any monetary value from this application.