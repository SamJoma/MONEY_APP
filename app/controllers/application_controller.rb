class ApplicationController < ActionController::Base
    include ActionController::Cookies 
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
     before_action :authorize 
    skip_before_action :verify_authenticity_token
    wrap_parameters format: []
    
    def authorize  
        return render json: {error:["Not authorized"] }, status: :unauthorized unless session[:user_id]
            
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
      end
end 