import React from "react";

class CategoryIndex extends React.Component {
    
    componentDidMount(){
        this.props.fetchCategory()
    }



    render() {

        const categoryPicNav = 'New Born'
        return (
            <div className='category-nav'>
                <ul className='category-nav-bar'>
                    <>
                    {
                            this.props.categories.map((category, idx) => {
                                if (category.category === categoryPicNav)
                                    return (
                                        <button className='nav-categroy' key={category.id}>
                                            {category.category}
                                        </button>
                                    )
                            })
                    }
                    </>
                </ul>
            </div>
        )
    }
}

export default CategoryIndex