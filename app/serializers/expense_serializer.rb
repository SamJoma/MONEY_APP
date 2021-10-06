class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :amount, :description, :date
    has_one :category
    has_one :monthly_budget
end
