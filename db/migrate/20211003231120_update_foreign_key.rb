class UpdateForeignKey < ActiveRecord::Migration[6.1]
  def change
    # remove the old foreign_key
    remove_foreign_key  :monthly_budgets, :users
  end
end
