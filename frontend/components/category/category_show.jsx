import React from 'react'
import {Link} from 'react-router-dom'

class CategoryShow extends React.Component {
    constructor(props) {

        super(props)
    }
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.categoryId)
        this.props.fetchAllProducts()
    }

    render() {
        const {category, products} = this.props
        if (!category) {
            return null;
        }
        const catProducts = products.filter(product => product.category_id === category.id)
        return (
            <div className='category-show-container'>
                {
                    catProducts.map((product, idx) => {
                        return (
                            <Link to={`/products/${product.id}`}>
                                <div className='catproduct-thumbnail' key={idx}>
                                    <img className="catproduct-thumbnail" src={product.photoUrl} alt="" />
                                        {product.title}
                                </div>
                            </Link>
                        )
                    })


                }
            </div>
        )
    }

}

export default CategoryShow