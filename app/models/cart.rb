class Cart < ApplicationRecord
    validates :buyer_id, :quantity, presence: true
    

    belongs_to :buyer,
    foreign_key: :buyer_id,
    class_name: :User,
    optional: true

    # has_many :cart_items,
    #     foreign_key: :cart_id,
    #     class_name: :Product

    has_many :cart_items
    has_many :products, through: :cart_items

end 