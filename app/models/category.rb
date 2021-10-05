class Category < ApplicationRecord
    has_many :expenses, dependent: :destroy
    has_many :users, through: :expenses
    has_many :category_budgets, dependent: :destroy
    has_many :monthly_budgets, through: :expenses
    has_many :monthly_budgets, through: :category_budgets
  
end
