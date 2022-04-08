class CreateCartAgain < ActiveRecord::Migration[5.2]
  def change
      create_table :carts do |t|
      t.integer :buyer_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.float :price, null: false
      t.string :productUrl, null: false
      t.string :title, null: false


      t.timestamps
    end
  end
end
