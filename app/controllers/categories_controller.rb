class CategoriesController < ApplicationController
    def index 
        
        render json: Categories.all
    end

    def show 
        category = Category.find_by(id:params[:id])
        if category.valid?
            render json: category 
        else
            render json: render_not_found_response
        end
    end
end
