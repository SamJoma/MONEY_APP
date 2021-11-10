class TipsController < ApplicationController

    def index
        tips = scraper
        tips.map!{|tip| {value:tip}}
        render json: tips 
        
    end
    private

    def scraper 
        url = "https://www.thebalance.com/top-ten-financial-tips-1289309"
        unparsed_page = HTTParty.get(url)
        parsed_page = Nokogiri::HTML(unparsed_page)
        tip_list = parsed_page.css('span.mntl-sc-block-heading__text').text.split(/\s\d./)[1...10]
        tip_list
        return tip_list 
    end
end
