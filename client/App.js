
import './App.css';
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"
import Login from "./Login"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar"
import MoneyApp from "./MoneyApp"

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#6F2DBD'
//     },
//     secondary: {
//       main: '#2E2E38'
//     }
//   }
// });

// const useStyles = makeStyles({
//   app: {
//     color: 'white',
//     backgroundColor: '#1E1E24',
//     display: 'flex'
//   }
// })

function App() {
//const classes = useStyles()
  const [user, setUser] = useState ()

  // useEffect(() => {
  //   fetch("/me")
  //  .then(res => {
  //   //  console.log(res)
  //    if (res.ok) {
  //      res.json().then(user => {
  //        setUser(user)
        
  //       })
  //    }
  //  })
  // }, [])

  function handleSignoutClick(){
    fetch('/logout', {
      method: 'DELETE'
    }).then((r) => {
      if(r.ok){
        setUser(null)
      }
    })
  }

  if(!user) return <Login setUser={setUser}/> 

  return (
    <>
        <h1>Money App</h1>
        <NavBar handleSignoutClick={handleSignoutClick}/>
        <Switch>
          <Route path='/mymoneyapp'>
            <MoneyApp user={user} />
          </Route>
          </Switch> 
    </>
    
  
  );
}

export default App;
