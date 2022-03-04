import React, { Component } from "react";


class BottomNavBar extends React.Component{
    constructor(props){
        super(props)
    }
    // componentDidMount() {
    //     this.props.fetchAllCategories()
    // }
    render() {
        return (
            <div className='nav-bar'>
                <ul className='bottom-nav'>
                    {/* {
                        this.props.categories.map((category, idx) => {
                            <div>
                            <button className='nav-categroy' key={category.id}>
                                {category.category}
                            </button>
                            </div>
                        })
                    } */}
                        <li className='nav-buttons'>
                            <button className='nav-categroy'>New Born</button>
                            <button className='nav-categroy'>Birthday</button>
                            <button className='nav-categroy'>Wedding</button>
                            <button className='nav-categroy'>Anniversary</button>
                            <button className='nav-categroy'>Anniversary</button>
                            <button className='nav-categroy'>Anniversary</button>
                        </li>
                </ul>
            </div>
        )
    }
}

export default BottomNavBar