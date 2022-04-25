import React, { Component } from "react";
import { Link } from "react-router-dom";
class CircleCategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchAllCategories()
    }

    render() {
        const {categories} = this.props
        
        const circleCats = {}
        categories.forEach((category => {
            circleCats[category.title] = category.id
        }))

        return (
            
            <div className='small-category-container'>
                    <div className='circle-cat'>
                        <div >
                        <Link to={`/categories/${circleCats['Birthday']}`}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/happy-birthday-cupcake.jpg' alt="" />
                        </Link>
                            <p id='text'>  Birthday</p>
                        </div >
                        <div>
                        <Link to={`/categories/${circleCats['Wedding']}`}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/wedding.jpg' alt="" />
                        </Link>
                                <p id='text'>  Wedding</p >
                        </div>

                        <div>
                        <Link to={`/categories/${circleCats['New Born']}`}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/newborn.jpg' alt="" />
                        </Link>
                                <p id='text'>   New Born</p >
                        </div>
                    </div>
            </div>
        
        )
    }
}

export default CircleCategoryIndex