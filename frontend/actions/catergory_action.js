import * as CategoryApiUtil from '../util/category_api_util'

export const FETCHCATEGORIES = 'FETCHCATEGORIES'
export const FETCHCATEGORY = 'FETCHCATEGORY'

export const receiveAllCategories = categories => {
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

    return (
        CategoryApiUtil.fetchCategories()
            .then(categories => dispatch(receiveAllCategories(categories)))
    )
}

export const fetchCategory = category => dispatch => {

    return (
        CategoryApiUtil.fetchCategory(category)
            .then(category => dispatch(receiveCategory(category)))
    )
}