import * as CategoryApiUtil from '../util/category_api_util'

export const FETCHCATEGORIES = 'FETCHCATEGORIES'
export const FETCHCATEGORY = 'FETCHCATEGORY'

export const receiveAllCategories = categories => {
    return {
        type: FETCHCATEGORIES,
        categories
    }
}

export const receivecategory = category => {
    return {
        type: FETCHCATEGORY,
        category
    }
}

export const fetchAllCategories = () => dispatch => {
    return (
        CategoryApiUtil.fetchcategories()
            .then(categories => dispatch(receiveAllCategories(categories)))
    )
}

export const fetchCategory = categoryId => dispatch => {
    return (
        CategoryApiUtil.fetchCategory(categoryId)
            .then(category => dispatch(receivecategory(category)))
    )
}