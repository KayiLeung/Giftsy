# json.extract! @cart, :id, :buyer_id, 

# json.set! @cart.buyer_id do
#     json.extract! @cart, :product_id
    

# end


# json.set! @cart.id do 
#     json.set! @cart.buyer_id do 
#         json.extract! @cart, :product_id, :quantity
#     end
# end

json.extract! @cart, :id, :buyer_id

json.set! :cart_items do
    @cart.cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :cart_id, :product_id, :quantity, :price
        end
    end
end