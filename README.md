# Giftsy


## About
Giftsy is a full stack Etsy clone that displays various handmade gifts for sale. Users are able to search for gifts for different occasion.

[Live Demo](http://https://giftsy.herokuapp.com/)

## Technologies Used

* Ruby on Rails
* HTML
* SCSS
* JavaScript
* React
* AWS
* PostgreSQL

## Features

### Product Listing

* Displays products which user can view and select.
* The products are listed in sections of rows which display he products by category or row style



### Reviews

* Users may leave rating for an item and leave review if they are logged in.  User are able to edit or delete after reviews are made.


### Future directions

* Allow users to add products to their cart with the number of products.


### Code Snippet
* I want user to be able to read ratings and reviews
* user can edit or delete by on click
```  
return (
        <div className='rating-container'>
            <div className='customer-ratings'>
                <Rating
                    style={{ color: 'black' }}
                    name='Rating Rank'
                    value={props.rating.score}
                    precision={0.5}
                    key={`rating-${props.rating.id}`}
                />
            </div>
                <RatingEditSubmitFormContainer
                    rating={props.rating}
                    updateRating={updateRating}
                />
            <div className='rating-edit-delete-btn'>
            <Link to={`/ratings/${props.ratingId}`}>Edit</Link>

            <button onClick={() => props.deleteRating(props.ratingId)
            }>            
                Delete
            </button>
            </div>
            
        </div>
    )