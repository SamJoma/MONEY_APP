
import './App.css';
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"
import Login from "./Login"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import MoneyApp from "./MoneyApp"
import UserProfile from './UserProfile'


function App() {
  const [user, setUser] = useState()
  console.log(user)
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
              <MoneyApp user={user} />
          </Route>
          <Route path='/profile'>
              <UserProfile user ={user} setUser={setUser}/>
          </Route>
          
          </Switch> 
    </div>
    
  
  );
}

export default App;
