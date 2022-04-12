import React from "react";
import Rating from '@mui/material/Rating';
import ReviewIndexItem from "./rating_index_item";

class RatingIndex extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {

        this.props.fetchAllRatings();
        this.props.fetchUsers();
    }

    render(){

        const { ratings, allUsers, currentUser, product, deleteRating, openModal, updateRating} = this.props
        const productId = product.id
        const productRatings = ratings.filter(rating => rating.product_id === productId)
        
    
        if (!ratings && !allUsers) return null;
        return (

            <div className='rating-index-container'>
                {productRatings.map((rating, idx) => {

                return (
                    <div className='rating-index-details' key={idx}>
                        {/* <p className='customer-fname'>{users[rating.buyer_id].fname}</p> */}
                        <br />
                        < ReviewIndexItem
                            rating={rating}
                            deleteRating={deleteRating}
                            ratingId={rating.id}
                            openModal={openModal}
                            updateRating={updateRating}
                            currentUser={currentUser}
                        />
                        
                        
                        <p id='customer-comment'>{rating.comment}</p>
                    </div>
                    )
                })
            }
            </div>
        )
    }
}

export default RatingIndex