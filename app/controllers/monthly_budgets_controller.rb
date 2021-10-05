class MonthlyBudgetsController < ApplicationController
   
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
    mb = MonthlyBudget.find_by(user_id:session[:user_id], name:monthKey[params[:id]])
    
    end
end
