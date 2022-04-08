class DropCartColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :price
    remove_column :carts, :productUrl
    remove_column :carts, :title

  end
end
