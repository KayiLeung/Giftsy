import React, { Component } from "react";

class CircleCategoryIndex extends React.Component {
    constructor(props) {
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
                <ul className='bottom-nav'>
                    <>
                        {
                            this.props.categories.map((category, idx) => {
                                if (category.title === 'Wedding' ||
                                    category.title === 'Birthday'||
                                    category.title === 'New Born' 
                                    )
                                    return (
                                        <div className='small-category' key={`circle-${idx}`}>
                                            <img className="circle-products" src={category.photoUrl} alt="" />
                                            {/* <p>{category.title}</p> */}
                                        </div>
                                    )
                            })
                        }
                    </>
                </ul>
            </div>
        )
    }
}

export default CircleCategoryIndex