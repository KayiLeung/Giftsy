class Cart < ApplicationRecord

    # belongs_to :buyer,
    #     foreign_key: :buyer_id,
    #     class_name: :User
    #     optional: true
    belongs_to :buyer

    has_many :products

end