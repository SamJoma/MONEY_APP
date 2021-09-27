class UsersController < ApplicationController
    
    skip_before_action :authorize, only: :create
#'/me'
    def show 
        user = User.find_by(id:session[:user_id])
        render json: user, status: :created
    end

# '/signup'
    def create 
        user = User.create(user_params) 
        session[:user_id]= user.id
        if user.valid?
            render json: user, status: :created 
            else  
                render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update 
        user = User.find_by(id:session[:user_id])
        user.update!(user_params)
        render json: user, status: accepted 
    end


    def test
        render json: scraper.to_json
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

    def scraper 
        url = "https://www.buzzfeed.com/morgansloss1/financial-tips-from-graham-stephan"
        unparsed_page = HTTParty.get(url)
        parsed_page = Nokogiri::HTML(unparsed_page)
        tips = Array.new
        tip_list = parsed_page.css('span.js-subbuzz__title-text').text.split('.')[8,16]
        
        tips << tip_list
        
        return tips 
    end

end

    

    
    

