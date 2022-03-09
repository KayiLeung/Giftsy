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
            // <div className='nav-bar'>
            //     <ul className='bottom-nav'>
            //         <>
            //             {
            //                 // this.props.categories.map((category, idx) => {
            //                 //     if (category.title === 'Wedding' ||
            //                 //         category.title === 'Birthday'||
            //                 //         category.title === 'New Born' 
            //                 //         )
            //                 //         return (
            //                 //             <div className='small-category' key={`circle-${idx}`}>
            //                 //                 <ul className='small-category-details'>
            //                 //                     <img className="circle-products" src={category.photoUrl} alt="" />
            //                 //                     <li>{category.title}</li>
            //                 //                     <li>{category.photoUrl}</li>
            //                 //                 </ul>
            //                 //                 <div className='small-category-details'></div>
                                                
            //                 //             </div>
            //                 //         )
            //                 // })
                
                            
            //             }
            //         </>
            //     </ul>
            // </div>

            <div className='small-category'>
                <ul className='small-category-details' key={1}>
                    <Link to={'/categories/4'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/happy-birthday-cupcake.jpg' alt="" /></Link>
                    {/* <li>Birthday</li> */}
                </ul>
                <ul className='small-category-details' key={2}>
                    <Link to={'/categories/1'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/wedding.jpg' alt="" /></Link>
                    {/* <li>Wedding</li> */}
                </ul>
                <ul className='small-category-details' key={3}>
                    <Link to={'/categories/5'}><img className="circle-products" src='https://giftsy-aa-seeds.s3.us-west-1.amazonaws.com/category_image/newborn.jpg' alt="" /></Link>
                    {/* <li>New Born</li> */}
                </ul>

                <div className='small-category-details'></div>

            </div>
        
        )
    }
}

export default CircleCategoryIndex