import * as CategoryApiUtil from '../util/category_api_util'

export const FETCHCATEGORIES = 'FETCHCATEGORIES'
export const FETCHCATEGORY = 'FETCHCATEGORY'

export const receiveAllCategories = categories => {
    // debugger
    return {
        type: FETCHCATEGORIES,
        categories
    }
}

export const receiveCategory = category => {
    return {
        type: FETCHCATEGORY,
        category
    }
}

export const fetchAllCategories = () => dispatch => {
    // debugger
    return (
        CategoryApiUtil.fetchCategories()
            .then(categories => dispatch(receiveAllCategories(categories)))
    )
}

export const fetchCategory = categoryId => dispatch => {
    return (
        CategoryApiUtil.fetchCategory(categoryId)
            .then(category => dispatch(receiveCategory(category)))
    )
}