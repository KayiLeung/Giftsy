import React from "react";
import Rating from '@mui/material/Rating';


//pass in product and users already
class RatingForm extends React.Component {
    constructor(props) {
        // debugger
        super(props);

        this.state = {
            score: 2.5,
            comment: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        debugger
        e.preventDefault();
        if (!this.props.user) {
            this.props.openModal('login')
        } else {
            debugger
            const productId = this.props.product.id;
            const buyerId = this.props.user
            debugger
            const rating = Object.assign(
                {}, {...this.state, 
                    buyer_id: buyerId,
                    product_id: productId
                }
                )
                debugger
        this.props.createRating(rating, productId);
            
        }

    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId)

    }

    handleInput(field) {
        return e => this.setState({[field] : e.currentTarget.value})
    }

    render() {
        const {users, product, user, currentUser} = this.props
        console.log('users:',users)
        console.log('user:',user)
        console.log('currentUser:', currentUser)
        // debugger
        if (!users && product) return null
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
                                value={this.state.score.toString()}
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
                        <input type="submit" className="rating-submit-button"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RatingForm