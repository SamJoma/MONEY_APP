import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory } from "react-router-dom"
import MoneyApp from "./MoneyApp"


function NavBar({ handleSignoutClick, user, setUser }) {
  
    const history = useHistory()


   
   
    return (
     
      <nav  class="navbar navbar-dark bg-dark">
             <div class="container-fluid">
               <div class="navbar-header"></div>
            <nav>
              <ul class="nav navbar-nav">
                <li>
                  <Link to="/mymoneyapp">Home</Link>
                </li >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/mybudget">My Budget</Link>
                </li>
                <li>
                  <Link to="/expenses">Expenses</Link>
                </li>
                <li class="btn btn-danger navbar-btn" onClick={handleSignoutClick}>Sign Out</li> 
              </ul>
            </nav>
            </div>
            </nav>

       
            
            )}
            export default NavBar;

      {/* // <>
      //   <nav class="navbar navbar-inverse">
      //     <div class="container-fluid">
      //       <div class="navbar-header">
            
      //         </div>
      //       <ul class="nav navbar-nav">
      //         <li class="active"><a href="/moneyapp">Home</a></li>
      //         <li><a href="#">Link</a></li>
      //         <li><a href="#">Link</a></li>
      //       </ul>
      //       <button class="btn btn-danger navbar-btn">Button</button>
      //     </div>
      //   </nav>

      //   <div class="container">
      //     <h2>Navbar Button</h2>
      //     <p>Use the navbar-btn class on a button to vertically align (same padding as links) it inside the navbar.</p>
      //   </div>
      // </> */}
        





