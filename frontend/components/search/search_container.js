import {connect} from 'react-redux'
import { fetchAllProducts } from '../../actions/product_action'
import Search from './search'


const mSTP = state => {
    return {
        products: Object.values(state.entities.products),
    }
}

const mDTP = dispatch => {

    return {
        fetchAllProducts: () => dispatch(fetchAllProducts())
    }
}

export default connect(mSTP, mDTP)(Search)