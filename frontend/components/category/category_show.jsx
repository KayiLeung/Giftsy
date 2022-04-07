import React from 'react'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
                  <div className='cat-show-title'> <h1>Find something you love</h1>  </div>
                    {/* state-name */}
                  <div className='category-show-right'> 
                  {/* post item */}
                {
                    catProducts.map((product, idx) => {
                        return (
                                <div className='all-product' >
                                    {/* post-box */}
                                <Link to={`/products/${product.id}`}>
                                    <div className='catproduct-thumbnail' key={idx}>
                                        <img className="catproduct-thumbnail-img" src={product.photoUrl} alt="" />
                                        <div className='product-details'>
                                            <li id='title'>{product.title}</li>
                                            <li id='rating'>rating</li>
                                            <li id='price'>{ `$ ${product.price}`}</li> 
                                            <li id='free-shipping'>FREE shipping</li>
                                        </div>
                                    </div>
                                </Link>
                                </div>
                        )
                    })
                }
                   
                    {/* <ImageList sx={{ width: 1400, height: 700}} cols={4} rowHeight={300}>
                        
                        {catProducts.map((product, idx) => (
                            <Link to={`/products/${product.id}`}>
                                <ImageListItem key={`${product.title}-${idx}`}>
                                    <img
                                        src={`${product.photoUrl}?w=164&h=164&fit=crop&auto=format`}
                                        // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`
                                        loading="lazy"
                                    />
                                    <Box sx={{ pr: 1 }}>
                                        <Typography gutterBottom variant="body2" color="black">
                                            {product.title}
                                        </Typography>
                                        <Typography display="block" variant="caption" color="text.secondary">
                                            {product.price} <span>Free Shipping</span>
                                        </Typography>
                                    </Box>
                                </ImageListItem>
                            </Link>
                        ))}
                        
                    </ImageList> */}
                </div>
            </div>
        )
    }

}

export default CategoryShow