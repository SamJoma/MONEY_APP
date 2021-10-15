Class 
   require 'nokogiri'
   require 'httparty'
   require 'byebug'

#    def tips
#     render json: scraper.to_json
# end

# def scraper 
#     url = "https://www.buzzfeed.com/morgansloss1/financial-tips-from-graham-stephan"
#     unparsed_page = HTTParty.get(url)
#     parsed_page = Nokogiri::HTML(unparsed_page)
#     links = Array.new
#     link_list = parsed_page.css('span.js-subbuzz__title-text').text.split('.')[8,9]
#     links << link_list
#     return links 
    
# end
# byebug

# scraper

#2. 2nd tips
# def scraper 
#     url = "https://www.thebalance.com/top-ten-financial-tips-1289309"
#     unparsed_page = HTTParty.get(url)
#     parsed_page = Nokogiri::HTML(unparsed_page)
#     link_list = parsed_page.css('span.mntl-sc-block-heading__text').text.split(/\s\d./)[1...10]
#     link_list
#     return link_list 
    
# end
# byebug

# scraper