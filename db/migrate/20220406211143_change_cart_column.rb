class ChangeCartColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :product_id, :integer
    add_column :carts, :quantity, :integer
  end
end
