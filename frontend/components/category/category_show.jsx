import React from 'react'
import {Link} from 'react-router-dom'

class CategoryShow extends React.Component {
    constructor(props) {

        super(props)
        console.log('constructor')
    }
    componentDidMount() {
        this.props.fetchCategory(this.props.match.params.categoryId)
        this.props.fetchAllProducts()
        console.log('componentdidmount')
    }

    render() {
        const {category, products} = this.props
        console.log({ category})
        console.log({ products})
        if (!category) {
            return null;
        }
        const catProducts = products.filter(product => product.category_id === category.id)
        console.log({ catProducts })
        return (
            <div className='category-show-container'>
                {
                    catProducts.map((product, idx) => {
                        return (
                            <div className='catproduct-thumbnail' key={idx}>
                                <Link to={`/products/${product.id}`}><img className="grid-products" src={product.photoUrl} alt="" /></Link>
                                <p className='catproduct-title'>{product.title}</p>
                            </div>
                        )
                    })


                }
            </div>
        )
    }

}

export default CategoryShow