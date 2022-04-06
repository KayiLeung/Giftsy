class DropColumn < ActiveRecord::Migration[5.2]
  def up
    drop_table :cart_items
  end
end
