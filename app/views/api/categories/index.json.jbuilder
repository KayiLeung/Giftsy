# debugger
@categories.each do |category|
    # debugger
    json.set! category.id do 
        # debugger
        json.partial! 'api/categories/category', category: category
    end
end