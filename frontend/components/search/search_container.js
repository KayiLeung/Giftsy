import {connect} from 'react-redux'
import React from 'react'
import Search from './search'
import { fetchProducts } from '../../actions/product_action'
import { fetchProduct } from '../../util/product_api_util'

const mSTP = state => {
    return {
        products: Object.values(state.entities.products),
    }
}

const mDTP = dispatch => {

    return {
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mSTP, mDTP)(Search)