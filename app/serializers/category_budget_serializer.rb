class CategoryBudgetSerializer < ActiveModel::Serializer
  attributes :id, :amount
  belongs_to :category

  # def category
  #   object.category
  # end
end
