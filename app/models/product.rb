class Product < ApplicationRecord
    validates :description, :title, :price, :quantity, presence: true
    validates :seller_id, presence: true

    has_one_attached :photo
    
    has_many :ratings

    belongs_to :category

    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: :User
        
    belongs_to :cart

end