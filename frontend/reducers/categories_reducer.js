import { FETCHCATEGORIES, FETCHCATEGORY } from "../actions/catergory_action";
const categoryReducer = (state={}, action) => {
    // debugger
    Object.freeze(state)
    const nextState = Object.assign({}, state)
    switch (action.type) {
        case FETCHCATEGORIES:
            return action.categories;
        case FETCHCATEGORY:
            nextState[action.category.id] = action.category
            return nextState;
        default:
            return state
    }
}

export default categoryReducer