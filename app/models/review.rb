class Review < ApplicationRecord

    has_many :cities through: :restaurants
    belongs_to :user
    belongs_to :restaurant
    
end
