@carts.each do |cart|
    # debugger
    json.set! cart.id do 
        json.partial! 'cart',  cart: cart
    end

end

# @carts.each do |cart|
#     @products.each do |product|
#         if cart.product_id = product.id
#             json.extract! product, :title, :price, :description
#         end
        
#     end
# end