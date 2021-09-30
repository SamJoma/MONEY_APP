class CreateCategoryBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :category_budgets do |t|
      t.belongs_to :monthly_budget, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true
      t.float :amount
      t.timestamps
    end
  end
end
