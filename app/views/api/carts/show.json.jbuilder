# json.extract! @cart, :id, :buyer_id, 

# json.set! @cart.buyer_id do
#     json.extract! @cart, :product_id
    

# end


json.set! @cart.id do 
    json.set! @cart.buyer_id do 
        json.extract! @cart, :product_id, :quantity
    end
end