class ChangeCartAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :amount 
    remove_column :carts, :productUrl
    remove_column :carts, :title

  end
end
