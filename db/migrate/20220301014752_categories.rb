class Categories < ActiveRecord::Migration[5.2]
  def change
     create_table :categories do |t|
      t.string :category, null: false
      t.integer :product_id, null: false

      t.timestamps
    end

  end
end
