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
        return (
 

            <div className='small-category-container'>
                    <div className='circle-cat'>
                        <div >
                        <Link to={'/categories/4'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/happy-birthday-cupcake.jpg' alt="" />
                        </Link>
                            <p id='text'>  Birthday</p>
                        </div >
                        <div>
                        <Link to={'/categories/1'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/wedding.jpg' alt="" />
                        </Link>
                                <p id='text'>  Wedding</p >
                        </div>

                        <div>
                        <Link to={'/categories/5'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/newborn.jpg' alt="" />
                        </Link>
                                <p id='text'>   New Born</p >
                        </div>
                    </div>
            </div>
        
        )
    }
}

export default CircleCategoryIndex