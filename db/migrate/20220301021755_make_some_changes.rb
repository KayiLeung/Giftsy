class MakeSomeChanges < ActiveRecord::Migration[5.2]
  def change

    remove_column :categories, :product_id
    add_column :products, :category_id, :string
  end
end
