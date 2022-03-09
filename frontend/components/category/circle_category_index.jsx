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
                <ul className='circle-cat'>
                    <li className='cat'>
                        <div>
                        <Link to={'/categories/4'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/happy-birthday-cupcake.jpg' alt="" />
                            <li>Birthday</li>
                        </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                        <Link to={'/categories/1'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/wedding.jpg' alt="" />
                            <li>Wedding</li>
                        </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                        <Link to={'/categories/5'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/newborn.jpg' alt="" />
                            <li>New Born</li>
                        </Link>
                        </div>
                    </li>
                </ul>
            </div>
        
        )
    }
}

export default CircleCategoryIndex