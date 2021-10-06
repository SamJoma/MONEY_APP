
import './App.css';
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"
import Login from "./user/Login"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
// import MoneyApp from "./MoneyApp"
import UserProfile from './user/UserProfile'
import MyBudgetContainer from './Budget/MyCategoryContainer'
import MonthlyBudgetContainer from './Budget/MonthlyBudgetContainer'
import ExpensePage from "./expense/ExpensePage"
import MyBudgetCardFront from './Budget/MyBudgetCardFront'


function App() {
 const [user, setUser] = useState()
 const [categoryBudget, setCategoryBudget] = useState([])
 const [category, setCategory] = useState([])
 const [months, setMonths] = useState([])
const [expenses, setExpenses] = useState([])



  useEffect(() => {
    const date = new Date()
    const month = date.getMonth()+1 
    fetch(`/monthly_budgets/${month}` , {credentials: 'include'})
   .then(res => {
    //  console.log(res)
     if (res.ok) {
       res.json().then(monthlyBudget => {
         setMonths(monthlyBudget)
        //  console.log(monthlyBudget)
        })
     }
   })
  }, [])

  useEffect(() => {
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
  
  console.log(expenses)
  
  function handleSignoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    }).then((r) => {
      if(r.ok){
        setUser(null)
      }
    })
  }
  // console.log(user)
  if(!user) return <Login setUser={setUser}/> 

  return (
    <div>
        <NavBar handleSignoutClick={handleSignoutClick}/>
        <Switch>
           <Route path='/mymoneyapp'> 
            <MyBudgetCardFront user={user} />
          </Route>
          <Route path='/login'> 
            <Login setUser={setUser} />
          </Route>
          <Route path='/mybudget'>
            <MonthlyBudgetContainer user ={user} categoryBudget={categoryBudget} category={category} setCategoryBudget={setCategoryBudget} months={months} setMonths={setMonths} />
          </Route>
          
          <Route path='/expenses'>
            <ExpensePage user ={user} categoryBudget={categoryBudget} setCategoryBudget={categoryBudget} setExpenses={setExpenses} expenses={expenses} /> 
            
          </Route>
          <Route path='/profile'>
            <UserProfile user ={user} setUser={setUser}/>
          </Route>
          
        </Switch> 
    </div>
    
  
  );
}

export default App;

