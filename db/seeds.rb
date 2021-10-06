puts '🌱 Seeding data...'

puts 'deleting old seeds'

Expense.destroy_all
CategoryBudget.destroy_all
MonthlyBudget.destroy_all
Category.destroy_all
User.destroy_all


puts 'Creating users...'
sam = User.create(username: 'Sam', password: 'password123')
puts 'Done seeding Users'


puts 'Creating monthly_budget...' 
june = MonthlyBudget.create(name: 'June', year: 2021,  user_id: sam.id)
october = MonthlyBudget.create(name: 'October', year: 2021,  user_id: sam.id)
may = MonthlyBudget.create(name: 'May', year: 2021, user_id: sam.id)
april = MonthlyBudget.create(name: 'April', year: 2021,  user_id: sam.id)
march = MonthlyBudget.create(name: 'March', year: 2021, user_id: sam.id )
puts 'Done'


puts 'Creating categories...'
transportation = Category.create(name: "Transportation" )
shopping = Category.create(name: "Shoppping" )
dining = Category.create(name: "Dining" )
travelExpenses = Category.create(name: "Travel Expenses")
puts 'Done'


puts 'Creating CategoryBudget...'
CategoryBudget.create( monthly_budget_id: october.id, category_id: transportation.id, amount:100 )
CategoryBudget.create( monthly_budget_id: may.id, category_id: shopping.id, amount:300 )
CategoryBudget.create( monthly_budget_id: october.id, category_id: dining.id, amount:200 )
CategoryBudget.create( monthly_budget_id: march.id, category_id: travelExpenses.id, amount:400 )
puts 'Done seeding CategoryBudget!'


puts 'Creating expenses...'
Expense.create(  monthly_budget_id: june.id, user_id: sam.id, category_id: transportation.id, date: DateTime.new(2009,9,1,17), amount: 100)
Expense.create(  monthly_budget_id: june.id, user_id: sam.id, category_id: shopping.id, date: DateTime.new(2009,9,1,17), amount:400, description: "Supercharger fee" )
Expense.create(  monthly_budget_id: june.id, user_id: sam.id, category_id: dining.id, date: DateTime.new(2009,9,1,17), amount:350, description:" Nobu" )
Expense.create(  monthly_budget_id: june.id, user_id: sam.id, category_id: travelExpenses.id, date: DateTime.new(2009,9,1,17), amount:1000, description:"yacht" )


Expense.create( monthly_budget_id: march.id, user_id: sam.id, category_id: transportation.id, date: DateTime.new(2009,9,1,17), amount:100, description:"road toll" )
Expense.create(  monthly_budget_id: march.id, user_id: sam.id, category_id: shopping.id, date: DateTime.new(2009,9,1,17), amount:500, description:"banana republic")
Expense.create( monthly_budget_id: march.id, user_id: sam.id, category_id: dining.id, date: DateTime.new(2009,9,1,17), amount:250, description: "steak house" )
Expense.create( monthly_budget_id: march.id, user_id: sam.id, category_id: travelExpenses.id, date: DateTime.new(2009,9,1,17), amount:1500, description: "flights" )
puts 'Done Seeding expenses!'



