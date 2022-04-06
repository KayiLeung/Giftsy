class Cart < ApplicationRecord
    validates :quantity, inclusion: { in: 0..10 }

    belongs_to :user
    has_many :products
end