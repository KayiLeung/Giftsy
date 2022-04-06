
@carts.each do |cart|
    json.set! cart.id do
        json.extract! cart, :buyer_id
        json.set! cart.product_id do
            json.extract! cart, :quantity
        end
    end
end




