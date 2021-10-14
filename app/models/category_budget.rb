class CategoryBudget < ApplicationRecord
    belongs_to :category 
    belongs_to :monthly_budget 
    
      # validates uniqueness: { case_sensitive: false } 
end
