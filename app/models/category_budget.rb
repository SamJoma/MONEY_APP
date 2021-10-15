class CategoryBudget < ApplicationRecord
    belongs_to :category 
    belongs_to :monthly_budget 
    
     validates :category, uniqueness: {case_sensitive: true }


end
