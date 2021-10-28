class CategoryBudget < ApplicationRecord
    belongs_to :category 
    belongs_to :monthly_budget 
    
     validates :category_id, uniqueness: {scope: :monthly_budget, message: " already exist!" }

     def total_spending 
        expenses = self.monthly_budget.expenses
        totalExpenses = expenses.where("category_id=?", self.category_id)
        totalSpent = totalExpenses.sum{|exp|exp.amount}
        totalSpent;
        # byebug
    end
end

# catbudget = CategoryBudget.last
# catbudget.monthly_budget
# month.expenses
# totalExpense = month.expenses.where("category_id=?",catbudget.category_id)
# totalSpent = totalExpense.sum{|exp|exp.amount}

