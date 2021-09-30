Rails.application.routes.draw do
  resources :category_budgets
  resources :categories
  resources :expenses
  resources :monthly_budgets 
  resources :users, except: :show

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy' 
  patch '/editprofile', to: 'users#update'
  get '/users/:id/months', to: 'monthly_budgets#user_months'
  get '/test', to: 'users#test'
  patch '/new_budget', to: 'monthly_budgets#editMonthlyIncome'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
 
end
