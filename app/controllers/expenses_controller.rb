class ExpensesController < ApplicationController
    def index 
        expenses = Expense.all
        render json: expenses 
    end
    def create 
        expense = Expense.create(expense_params)
        
        render json: expense
    end

    private
        def expense_params
            params.permit(:user_id, :category_id, :date, :monthly_budget_id, :description, :amount)
        end
end
