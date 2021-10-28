class MonthlyBudget < ApplicationRecord
    belongs_to :user
    has_many :expenses, dependent: :destroy
    has_many :categories, through: :expenses
    has_many :category_budgets, dependent: :destroy
end   

