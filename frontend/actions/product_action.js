import * as ProductApiUtil from '../util/product_api_util'

export const FETCHPRODUCTS = 'FETCHPRODUCTS'
export const FETCHPRODUCT = 'FETCHPRODUCT'

export const receiveAllProducts = products => ({
    type: FETCHPRODUCTS,
    products
})

export const receiveProduct = product => ({
    type: FETCHPRODUCT,
    product
})

export const fetchAllProducts = () => dispatch => {
    // debugger
    return (
        ProductApiUtil.fetchProducts()
        .then((products) => {
            // debugger
            return (
                dispatch(receiveAllProducts(products))
            )
        })
    )
}

export const fetchProduct = productId => dispatch => (
    ProductApiUtil.fetchProduct(productId)
        .then(product => dispatch(receiveProduct(product)))
)