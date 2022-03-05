import React, { Component } from "react";


class BottomNavBar extends React.Component{
    constructor(props){
        debugger
        super(props)
    }
    componentDidMount() {
        debugger
        this.props.fetchAllCategories()
    }
 
    render() {
        debugger
        return (
            <div className='nav-bar'>
                <ul className='bottom-nav'>
                    <>
                    {/* {
                        this.props.categories.map((category, idx) => (
                            <button className='nav-categroy' key={category.id}>
                                {category.category}
                            </button>
                        ))
                    } */}
                        {
                            this.props.categories.map((category, idx) => {
                                if (category.category  !== 'Lucky Pick')
                                return (
                                <button className='nav-categroy' key={category.id}>
                                    {category.category}
                                </button>
                            )})
                        }
                    </>
                </ul>
            </div>
        )
    }
}

export default BottomNavBar