class Rating < ApplicationRecord
    validates :buyer_id, :product_id, :score ,presence: true


    belongs_to :reviewed_product,
        foreign_key: :product_id,
        class_name: :Product,
        optional: true



    belongs_to :reviewer,
        foreign_key: :buyer_id,
        class_name: :User,
        optional: true
    


end