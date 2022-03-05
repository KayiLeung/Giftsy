class Category < ApplicationRecord
    validates :category, presence: true

    has_one_attached :photo
    has_many :products




end