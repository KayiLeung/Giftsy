import React from "react";
import Rating from '@mui/material/Rating';
import withRouter from 'react-router-dom'
import Box from '@mui/material/Box';

class RatingForm extends React.Component {
    constructor(props) {
        debugger
        super(props);

        this.state = {
            score: 1,
            comment: ''
        }
    }


    handleSubmit(e) {
        e.preventDefault();
        debugger
        if (!this.props.user) {
            debugger
            this.props.openModal('login')
        } else {
            const productId = this.props.match.params.productId;
            const rating = Object.assign({}, this.state, {
                product_id: productId,
                buyer_id: this.props.user.id
            })
        this.props.createRating(rating, productId);
            
        }
    }

    handleInput(field) {
        return e => this.setState({[field] : e.currentTarget.value})
    }

    componentDidMount() {
        // this.props.
    }

    render() {
        debugger
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
                        <input type="submit" className="rating-submit-button"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RatingForm