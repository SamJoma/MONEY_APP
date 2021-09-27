class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.belongs_to :monthly_budget, null: false, foreign_key: true
      t.string :name
      t.float :budget
      

      t.timestamps
    end
  end
end
