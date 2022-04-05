class Cart < ApplicationRecord
    validates :buyer_id, :product_id, :quantity, presence: true

    belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: :User,
    optional: true

    has_many :products,
        foreign_key: :cart_id,
        class_name: :Product

end