class MonthlyBudgetsController < ApplicationController
   
  def update
    budget = MonthlyBudget.find_by(id: params[:id])
    if budget
      budget.update(user_params)
      render json: {message: "Update Sucessful", budget: @budget}, status: :ok
    else
      render json: { error: 'Invalid request' }, status: :unauthorized
    end
  end

    def show  
    monthKey = {
        1 => 'January',
        2 => 'February',
        3 => 'March',
        4 => 'April',
        5 => 'May',
        6 => 'June',
        7 => 'July',
        8 => 'August',
        9 => 'September',
        10 => 'October',
        11 => 'November',
        12 => 'December'
        
      }
      puts session[:user_id]
    mb = MonthlyBudget.find_by(user_id:session[:user_id], name:monthKey[params[:id].to_i])
    render json: mb
    end

    private
    def user_params
      params.permit(:category_id, :date, :description, :amount)
    end
end
