json.extract! product, :id, :title, :seller_id, :price, :description, :quantity, :category_id
json.photoUrl url_for(product.photo)