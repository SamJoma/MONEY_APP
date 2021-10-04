class CategoryBudgetsController < ApplicationController
    def create 
        monthly_budget = CategoryBudget.create(budget_params)
        if monthly_budget.valid?
            render json: monthly_budget, status: :accepted
        else
            render json: :render_unprocessable_entity_response
        end
        
    end

    def index 
        category_budgets = CategoryBudget.all 
        render json: category_budgets

    end
    private
    def budget_params
        params.permit(:monthly_budget_id, :category_id, :amount)
    end
end
