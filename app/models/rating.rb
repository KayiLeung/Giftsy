class Rating < ApplicationRecord
    validates :buyer_id, :product_id, presence: true


    belongs_to :product, optional: true
    belongs_to :reviewer,
        foreign_key: :buyer_id,
        class_name: :User,
        optional: true
    


end