class UserMailer < ApplicationMailer 
    default :from => "moneyapp.sam@gmail.com"

    def registration_confirmation(user)
        @user = user
        message = mail(:to => "#{user.username} <#{user.email}>", :subject => "Registration Confirmation")
         message.deliver
     end
 end
 