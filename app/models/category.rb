class Category < ApplicationRecord
    validates :title, presence: true

    has_one_attached :photo
    
    has_many :products




end