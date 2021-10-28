import './App.css';
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"
import Login from "./user/Login"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import UserProfile from './user/UserProfile'
import MonthlyBudgetContainer from './Budget/MonthlyBudgetContainer'
import MyBudgetCardFront from './Budget/MyBudgetCardFront'
import MonthlyBudgetForm from './Budget/MonthlyBudgetForm';
import Financial_tips from './Financial_tips'
import AddExpenseContainer from './expense/AddExpenseContainer'



function App() {
 const [user, setUser] = useState()
 const [categoryBudget, setCategoryBudget] = useState([])
 const [category, setCategory] = useState([])
 const [months, setMonths] = useState([])
 const [amount, setAmount] = useState(0);
 const [expenses, setExpenses] = useState([])
 const [finTips, setFinTips] = useState([])
 const history=useHistory()

const {expId} = expenses


function handleSignoutClick(){
  fetch('/logout', {
    method: 'DELETE'
  }).then((r) => {
    if(r.ok){
      setUser(null)
    }
  })
} 

  useEffect(() => {
    const date = new Date()
    const month = date.getMonth()+1 
    fetch(`/monthly_budgets/${month}`, {credentials: 'include'})
   .then(res => {
    //  console.log(res)
     if (res.ok) {
       res.json().then(monthlyBudget => {
         setMonths(monthlyBudget)
        //  console.log(monthlyBudget)
        })
     }
   })
  

    fetch('/categories' , {credentials: 'include'})
     .then(res => res.json())
     .then(data => setCategory(data))


      fetch('/category_budgets', {credentials: 'include'})
       .then(res => res.json())
       .then(data =>setCategoryBudget(data)) 

      
      fetch('/monthly_budgets', {credentials: 'include'})
       .then(res => res.json())
       .then(data =>setCategoryBudget(data)) 
        


      fetch('/expenses', {credentials: 'include'})
       .then(res => res.json())
       .then(data =>setExpenses(data)) 
       

       fetch('/tips', {credentials: 'include'})
       .then(res => res.json())
       .then(data =>setFinTips(data)) 
       

      fetch("/me")
        .then(res => {
      //  console.log(res)
       if (res.ok) {
        res.json().then(user => {
          setUser(user)
          })

      }
    })
  }, [])

  // .then(() =>setMonths({...months, category_budgets: months.category_budgets.filter(cat => cat.id!=id)})) 
  // history.push('/mymoneyapp')
  
      function handleDeleteExpense(expId){
        fetch(`/expenses/${expId}`, {
          method:"DELETE",
          headers: {Accept: 'application/json'}
        })
           .then(data =>  {
            console.log(data)
              setExpenses([...expenses, data].map(exp => (
                 exp.id !== expId) )
              
              )
           history.push('/expenses')

           })
        }
 
      console.log(expenses)


  if(!user) return <Login setUser={setUser}/> 

  return (
    <div>
        <NavBar handleSignoutClick={handleSignoutClick}/>
        <Switch>
           <Route path='/mybudget'> 
            <MonthlyBudgetForm user={user} amount={amount} setAmount={setAmount} months={months} setMonths={setMonths} category={category} />
          </Route>
          <Route path='/finacialtips'> 
            <Financial_tips user={user} setUser={setUser} finTips={finTips} setFinTips={setFinTips} />
          </Route>
          <Route path='/login'> 
            <Login setUser={setUser} />
          </Route>
          <Route path='/expenses'> 
            <AddExpenseContainer handleDeleteExpense={handleDeleteExpense} expenses={expenses} setExpenses={setExpenses} setUser={setUser} />
          </Route>
          <Route path='/mymoneyapp'>
            <MonthlyBudgetContainer useHistory={useHistory} user ={user} categoryBudget={categoryBudget} months={months} category={category} setExpenses={setExpenses} expenses={expenses} setMonths={setMonths} />
          </Route>
          <Route path='/profile'>
            <UserProfile user ={user} setUser={setUser}/>
          </Route>
          
        </Switch> 
    </div>
    
  
  );
}

export default App;

