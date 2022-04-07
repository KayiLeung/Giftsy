class Cart < ApplicationRecord

    belongs_to :buyer,
        foreign_key: :buyer_id,
        class_name: :User,
        optional: true
    # belongs_to :user

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product
end