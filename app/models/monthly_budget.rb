class MonthlyBudget < ApplicationRecord
    belongs_to :user
    has_many :categories, dependent: :destroy
    has_many :expenses, dependent: :destroy
end
