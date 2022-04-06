class RenameTable < ActiveRecord::Migration[5.2]
  def change
    rename_table :cart_itmes, :carts
  end
end
