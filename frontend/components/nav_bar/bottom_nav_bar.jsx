import React, { Component } from "react";
import { Link } from "react-router-dom";


class BottomNavBar extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {

        this.props.fetchAllCategories()
    }


 
    render() {
    
        return (
            <div className='nav-bar'>
                <ul className='bottom-nav-container'>
                    {
                        this.props.categories.map((category, idx) => {
                            if (category.title !== 'Lucky Pick')
                            return (
                                <div className='nav-category' key={`category-${category.id}-${idx}`}>
                                <Link 
                                className='category-button'
                                to={`/categories/${category.id}`}>
                                    {category.title}
                                </Link>
                            </div>
                            )
                        })
                    }
            
                </ul>
            </div>
        )
    }
}

export default BottomNavBar