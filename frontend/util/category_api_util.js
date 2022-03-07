export const fetchCategories = () => {
    // debugger
    return( 
        $.ajax({ 
            method: "GET",
            url: 'api/categories'
        })
    )
}

export const fetchCategory = categoryId => {
    // debugger
    return (
        $.ajax({
        method: "GET",
        url: `api/categories/${categoryId}`
        })
    )
}
