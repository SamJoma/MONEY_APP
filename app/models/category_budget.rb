class CategoryBudget < ApplicationRecord
    belongs_to :category 
    belongs_to :monthly_budget 
    
     validates :category_id, uniqueness: {scope: :monthly_budget, message: " already exist!" }


end
