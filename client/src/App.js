
import './App.css';
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"
import Login from "./user/Login"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import MoneyApp from "./MoneyApp"
import UserProfile from './user/UserProfile'
import MyBudgetContainer from './Budget/MyBudgetContainer'



function App() {
 const [user, setUser] = useState()
 const [categories, setCategories] = useState([])
 
  useEffect(() => {
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

  useEffect(() => {
    fetch('/categories')
    .then(res => res.json())
    .then(setCategories) 
  }, [])


  function handleSignoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    }).then((r) => {
      if(r.ok){
        setUser(null)
      }
    })
  }
  console.log(user)
  if(!user) return <Login setUser={setUser}/> 

  return (
    <div>
        <h1>Money App</h1>
        <NavBar handleSignoutClick={handleSignoutClick}/>
        <Switch>
          <Route path='/mymoneyapp'> 
            <MoneyApp user={user} expenses={user.expenses}/>
          </Route>
          <Route path='/login'> 
            <Login setUser={setUser} />
          </Route>
          
          {/* <Route path='/mymoneyapp'>
            <MyBudgetContainer user ={user} setUser={setUser}/>
          </Route> */}
          <Route path='/userprofile'>
            <UserProfile user ={user} setUser={setUser}/>
          </Route>
          
        </Switch> 
    </div>
    
  
  );
}

export default App;

