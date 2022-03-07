import { connect } from 'react-redux'
import ProductIndex from './product_index'
import { fetchAllProducts, fetchProduct} from '../../actions/product_action'
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_action';

const mSTP = ({ session, entities: { users, products } }) => {
    // debugger
    return { 
        products : Object.values(products),
        currentUser: users[session.id],
    }
}

const mDTP = dispatch => {
    // debugger
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
    }
}

export default connect(mSTP, mDTP)(ProductIndex);