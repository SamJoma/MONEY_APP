class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :name
      t.float :amount
      t.belongs_to :monthly_budget, null: false, foreign_key: true
      t.belongs_to :user, null:false, foreign_key: true
      t.belongs_to :category

      t.timestamps
    end
  end
end
