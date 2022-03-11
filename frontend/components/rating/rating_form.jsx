import React from "react";
import Rating from '@mui/material/Rating';


//pass in product and users already
class RatingForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     score: this.props.rating.score,
        //     comment: this.props.rating.comment
        // }
            this.state = {
            score: 2.5,
            comment: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
    
        e.preventDefault();
        if (!this.props.user) {
            this.props.openModal('login')
        } else {
       
            if (this.props.formType === 'create_rating') {
            const productId = this.props.product.id;
            const buyerId = this.props.user
           
                const rating = Object.assign({}, {...this.state, 
                    buyer_id: buyerId,
                    product_id: productId
                })
                this.props.action(rating, productId)
            } 
            
            
            // else {
            //     const rating = Object.assign({}, this.state)
            //     this.props.action(rating)
            // }
            // this.setState( {comment: ''})
            
        }
    }

    componentDidMount(){
            this.props.fetchProduct(this.props.match.params.productId)
            // this.props.fetchRating(this.props.match.params.ratingId)
    }

    handleInput(field) {
        return e => this.setState({[field] : e.currentTarget.value})
    }

    render() {
        const {users, product, user, currentUser} = this.props
        if (!users && !product) return null
        return(
            <div>
                <div>

                </div>
                <div className='rating-form-container'>
                    <div>
                        <label>Leave Reviews:</label>
                        <form onSubmit={this.handleSubmit}>

                            <Rating
                                style={{color: 'black'}}
                                name='Rating Rank'
                                value={this.state.score}
                                precision={0.5}
                                onChange={this.handleInput('score')} 
                            />

                            <textarea
                                className='rating-content'
                                value={this.state.comment}
                                onChange={this.handleInput('comment')}
                                cols='70'
                                rows='4'
                            />
                        <button type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RatingForm