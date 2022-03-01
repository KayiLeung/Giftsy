class order < ApplicationRecord
    validates :buyer_id, :product_id, presence: true

    belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: :User

    has_many :products
        


end