class Removecolumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :fname
    remove_column :users, :lname


  end
end
