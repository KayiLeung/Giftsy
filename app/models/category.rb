class category < ApplicationRecord
    validates :category, presence: true

    has_many :products


end