class CreateMonthlyBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :monthly_budgets do |t|
      t.string :name
      t.integer :year
      t.belongs_to :user, null: false, foreign_key: true
      

      t.timestamps
    end
  end
end
