class CategoryBudgetSerializer < ActiveModel::Serializer
  attributes :id, :amount
  belongs_to :category
end
