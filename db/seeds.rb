puts '🌱 Seeding data...'

# puts 'deleting old seeds'
# User.destroy_all
# MonthlyBudget.destroy_all
# Category.destroy_all
# CategoryBudget.destroy_all
# Expense.destroy_all






puts 'Creating users...'
sam = User.create(username: 'Sam', password: 'password123')
puts 'Done seeding Users'


puts 'Creating monthly_budget...' 
MonthlyBudget.create(name: 'June', year: 2021,  user_id: 1)
MonthlyBudget.create(name: 'May', year: 2021, user_id: 1)
MonthlyBudget.create(name: 'April', year: 2021,  user_id: 1)
MonthlyBudget.create(name: 'March', year: 2021, user_id: 1 )
puts 'Done'


puts 'Creating categories...'
Category.create(name: "Transportation" )
Category.create(name: "Shoppping" )
Category.create(name: "Dining" )
Category.create(name: "Travel Expenses")
puts 'Done'


puts 'Creating CategoryBudget...'
CategoryBudget.create( monthly_budget_id: 1, category_id: 1, amount:100 )
CategoryBudget.create( monthly_budget_id: 1, category_id: 2, amount:300 )
CategoryBudget.create( monthly_budget_id: 1, category_id: 3, amount:200 )
CategoryBudget.create( monthly_budget_id: 1, category_id: 4, amount:400 )
puts 'Done seeding CategoryBudget!'



puts 'Creating expenses...'
Expense.create(  monthly_budget_id: 1, user_id: 1, category_id: 2 )
Expense.create(  monthly_budget_id: 1, user_id: 1, category_id: 2 )
Expense.create(  monthly_budget_id: 1, user_id: 1, category_id: 3 )
Expense.create(  monthly_budget_id: 1, user_id: 1, category_id: 4 )

Expense.create( monthly_budget_id: 2, user_id: 1, category_id: 2 )
Expense.create(  monthly_budget_id: 2, user_id: 1, category_id: 2 )
Expense.create(  monthly_budget_id: 2, user_id: 1, category_id: 3 )
Expense.create( monthly_budget_id: 2, user_id: 1, category_id: 4 )
puts 'Done Seeding!'



