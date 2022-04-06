class DropOrders < ActiveRecord::Migration[5.2]
  def up
    drop_table :orders
  end
end
