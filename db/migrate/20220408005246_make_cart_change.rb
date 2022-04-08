class MakeCartChange < ActiveRecord::Migration[5.2]
  def change
      add_column :carts, :amount, :float
      add_column :carts, :productUrl, :string
      add_column :carts, :title, :string
  end
end
