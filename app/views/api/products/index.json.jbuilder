    # json.array! @products do |product|
    #     json.extract! product :id, :title, :price, :description, :seller_id, :quantity
    #     # [{"id": 1, "title": "cup".....}, {"id": 2, "title": "plate"....}]
    #     json.photoUrl url_for(product.photo)
    # end


@products.each do |product|
   
    json.set! product.id do 
        json.partial! 'product',  product: product
        json.photoUrl url_for(product.photo)
    end
end
