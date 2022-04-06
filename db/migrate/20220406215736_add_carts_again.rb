class AddCartsAgain < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_itmes do |t|
      t.integer :buyer_id, null: false
      t.integer :product_id, null: false
      t.float :amount
      t.integer :quantity

      t.timestamps
    end
  end
end
