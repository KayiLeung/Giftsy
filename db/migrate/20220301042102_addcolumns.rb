class Addcolumns < ActiveRecord::Migration[5.2]
  def change
    add_index :orders, :product_id
    add_index :orders, :buyer_id
  end
end
