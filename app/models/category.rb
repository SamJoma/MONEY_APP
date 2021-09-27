class Category < ApplicationRecord
    belongs_to :monthly_budget
    has_many :expenses, through: :monthly_budget
    
end
