class CreateCart < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :buyer_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, null: false
    end

    add_index :carts, [:buyer_id, :product_id], unique: true, name: 'cart_composite_key'
  end
end
