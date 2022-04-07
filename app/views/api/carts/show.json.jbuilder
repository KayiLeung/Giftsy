json.partial! 'api/carts/cart', cart: @cart

json.extract! @cart, :buyer_id, :product_id, :quantity