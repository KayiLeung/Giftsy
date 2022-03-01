class MakeChanges < ActiveRecord::Migration[5.2]
  def change

  remove_column :orders ,:product_id
  add_column :products, :order_id, :integer
  end
end
