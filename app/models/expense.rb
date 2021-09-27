class Expense < ApplicationRecord
    belongs_to :users
    belongs_to :monthly_budget
    belongs_to :category 
end
