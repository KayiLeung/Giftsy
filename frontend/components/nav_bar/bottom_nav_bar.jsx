import React, { Component } from "react";
import { Link } from "react-router-dom";


class BottomNavBar extends React.Component{
    constructor(props){
        // debugger
        super(props)
    }
    componentDidMount() {
        // debugger
        this.props.fetchAllCategories()
    }


 
    render() {
        // debugger
        return (
            <div className='nav-bar'>
                <ul className='bottom-nav-container'>
                    {
                        this.props.categories.map((category, idx) => {
                            if (category.title !== 'Lucky Pick')
                            return (
                            <div className='nav-category'>
                                <Link 
                                className='category-button'
                                key={category.id}
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