json.set! @cart.id do
    json.extract! @cart, :products
    

end