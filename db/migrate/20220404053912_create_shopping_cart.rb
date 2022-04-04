class CreateShoppingCart < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_carts do |t|
      t.integer :buyer_id, null: false

      t.timestamps
    end
  end
end
