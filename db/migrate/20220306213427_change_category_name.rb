class ChangeCategoryName < ActiveRecord::Migration[5.2]
  def change 

  remove_column :categories, :category
  add_column  :categories, :title, :string
  end
end
