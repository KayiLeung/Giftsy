import React from "react";
import Rating from '@mui/material/Rating';

class RatingIndex extends React.Component{
    constructor(props) {
        // debugger
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchAllRatings();
    }

    render(){
        // debugger
        const {ratings, users, currentUser, product} = this.props
        const productId = product.id
        const productRatings = ratings.filter(rating => rating.product_id === productId)
        
    
        if (!ratings && !users) return null;
        return (

            <div className='rating-index-container'>
                {productRatings.map((rating, idx) => {
                return (
                <div className='rating-details'>
                    <Rating
                        style={{ color: 'black' }}
                        name='Rating Rank'
                        value={rating.score}
                        precision={0.5}
                        key={`rating-${rating.id}`}
                    />
                    <p></p>
                    <p>customer: {users[rating.buyer_id].fname}</p>
                    <p>comment:  {rating.comment}</p>
                </div>
                )
                })
            }
            </div>
        )
    }
}

export default RatingIndex