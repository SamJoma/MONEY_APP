class AddColumnsToExpenses < ActiveRecord::Migration[6.1]
  def change
    add_column :expenses, :date, :datetime
    add_column :expenses, :description, :string
    add_column :expenses, :amount, :float
  end
end
