class CategoryBudgetsController < ApplicationController
    
    def create 
        monthly_budget = CategoryBudget.create(budget_params)
        if monthly_budget.valid?
            render json: monthly_budget, status: :accepted
        else
            render json: :render_unprocessable_entity_response
        end
        
    end

    def destroy
        category_budget = CategoryBudget.find_by(id:params[:id])
        category_budget.destroy 
        head :no_content
    end

    def update
        category_budget = CategoryBudget.find_by(id:params[:id])
        category_budget.update(updateAmountParam)
        render json: category_budget, status: :accepted
    end

    def index 
        category_budgets = CategoryBudget.all 
        render json: category_budgets

    end

    private

    def budget_params
        params.permit(:monthly_budget_id, :category_id, :amount)
    end

    def updateAmountParam
        params.permit(:amount)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
      end
end
