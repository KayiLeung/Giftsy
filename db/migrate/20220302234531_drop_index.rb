class DropIndex < ActiveRecord::Migration[5.2]

  def change

    remove_index :products, name:"index_products_on_seller_id"
    remove_index :orders, name: "index_orders_on_buyer_id"
  end
end
