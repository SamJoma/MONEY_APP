class ApplicationController < ActionController::Base
    include ActionController::Cookies 
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # before_action :authorize 
    skip_before_action :verify_authenticity_token
 
    def authorize  
        return render json: {error:["Not authorized"] }, status: :unauthorized
        unless session.include? :user_id
            
        end
    end
end
