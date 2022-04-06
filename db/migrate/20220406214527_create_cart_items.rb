class CreateCartItems < ActiveRecord::Migration[5.2]


  def up
    drop_table :shopping_carts

  end
end
