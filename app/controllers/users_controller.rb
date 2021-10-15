class UsersController < ApplicationController
    require 'nokogiri'
    require 'httparty'
    require 'byebug'

    skip_before_action :authorize, only: :create
#'/me'
    def show 
        user = User.find_by(id:session[:user_id])
        render json: user, status: :created
    end

    def destroy
        user = User.find_by(id:params[:id])
        user.destroy
        head :no_content
    end

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
      end

      def update
        user = User.find_by(id: params[:id])
    
        if user
          user.update(user_params)
          render json: {message: "Update Sucessful", user: @user}, status: :ok
        else
          render json: { error: 'Invalid request' }, status: :unauthorized
        end
      end
    

# '/signup'
    def create 
        user = User.create(user_params) 
        session[:user_id]= user.id
        if user.valid?
            user.addMonths
            render json: user, status: :created 
            else  
                render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end


    # def tips
    #     render json: scraper.to_json
    # end

    private

    # def scraper 
    #     url = "https://www.buzzfeed.com/morgansloss1/financial-tips-from-graham-stephan"
    #     unparsed_page = HTTParty.get(url)
    #     parsed_page = Nokogiri::HTML(unparsed_page)
    #     links = Array.new
    #     link_list = parsed_page.css('span.js-subbuzz__title-text').text.split('.')[8,9]
    #     links << link_list
    #     return links   
    # end
    #     byebug
    
    #     scraper

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

   
end

    

    
    

