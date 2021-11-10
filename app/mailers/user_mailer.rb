class UserMailer < ApplicationMailer 
    default :from => "surickj@gmail.com"

    def registration_confirmation(user)
        @user = user
        message = mail(:to => "#{user.username} <#{user.email}>", :subject => "Registration Confirmation")
         message.deliver
     end
 end
 