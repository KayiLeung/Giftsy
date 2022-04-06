class ChangeCartPrice < ActiveRecord::Migration[5.2]
  def change

    add_column :carts, :amount, :float
  end
end
