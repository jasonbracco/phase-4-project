class Restaurant < ApplicationRecord

    belongs_to :city
    has_many :reviews
    has_manyy :users, through: :reviews
    
end
