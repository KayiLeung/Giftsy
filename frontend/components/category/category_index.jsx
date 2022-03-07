import React, {Component} from "react";

class CategoryIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchAllCategories()
    }

    render() {
        return (
            <div className='nav-bar'>
                <ul className='bottom-nav'>
                    <>
                        {
                            this.props.categories.map((category, idx) => {
                                if (category.title !== 'Lucky Pick')
                                    return (
                                        <button className='nav-categroy' key={category.id}>
                                            {category.title}
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