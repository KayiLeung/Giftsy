json.partial! 'api/carts/cart', cart: @cart

json.extract! cart, :id, :buyer_id, :product_id, :quantity, :title, :amount, :productUrl