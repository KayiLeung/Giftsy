class Rating < ActiveRecord::Migration[5.2]
  def change
     create_table :ratings do |t|
      t.string :score, null: false
      t.integer :buyer_id, null: false
      t.integer :product_id, null: false

      t.timestamps
    end

  end
end
