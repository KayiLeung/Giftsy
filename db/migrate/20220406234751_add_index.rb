class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index( :carts, [:buyer_id, :product_id], unique: true, name: 'cart_composite_key')
  end
end
