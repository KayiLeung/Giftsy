class product < ApplicationRecord
    validates :description, :title, :price, :quantity, presence: true
    validates :seller_id, :order_id, :category_id, presence: true

    has_many :ratings
    belongs_to :category
    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User
        
    belongs_to :order


end