import React from "react";
import Rating from '@mui/material/Rating';


class RatingEditSubmitForm extends React.Component {
constructor(props) {
    debugger
    super(props);
    this.state = {
        score: 2.5,
        comment: '',
    }
    // this.state = this.props.rating
    // console.log('props:', props)
    this.handleSubmit = this.handleSubmit.bind(this)
}


handleSubmit(e) {
    // debugger
    e.preventDefault();
    const rating = Object.assign(this.state)
    rating['id'] = this.props.match.params.ratingId
    // debugger
    // console.log(rating)

    this.props.action(rating) 
        .then(res => this.props.history.push(`/products/${res.rating.product_id}`))
    // this.props.action(rating)
        // .then(res => console.log('res:',res))
        

}

// componentDidMount(){
//     debugger
//     this.props.fetchRating(this.props.match.params.ratingId)

// }

handleInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
}

render() {
    const { rating } = this.props
    // console.log('render:',rating)
    if (!rating) return null
    return (
        <div>
            <div>

            </div>
            <div className='rating-form-container'>
                <div>
                    <label>Edit Reviews:</label>
                    <form onSubmit={this.handleSubmit}>

                        <Rating
                            style={{ color: 'black' }}
                            name='Rating Rank'
                            value={this.props.score}
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
                        <input type="submit" className="rating-submit-button" />
                    </form>
                </div>
            </div>
        </div>
    )
}
}

export default RatingEditSubmitForm