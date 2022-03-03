# json.array! @products do |product|
#     json.extract! product :id, :title, :price, :description, :seller_id, :quantity
#     # [{"id": 1, "title": "cup".....}, {"id": 2, "title": "plate"....}]
    # json.photoUrl url_for(product.photo)
    # { ["photoUrl" : "url"]}
# end
# debugger

@products.each do |product|
    # debugger
    json.set! product.id do 
        json.partial! 'product',  product: product
        json.photoUrl url_for(product.photo)
    end
end
