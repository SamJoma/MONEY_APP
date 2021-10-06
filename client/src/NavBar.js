import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'

function NavBar({ handleSignoutClick, user, setUser }) {
  
    const history = useHistory()


   
   
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        
          <Link className="navbar-brand" to="/mymoneyapp">Money App</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-8">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="mybudget#">My Budget</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="expenses">Expenses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="profile">Profile</Link>
              </li>
              <li className="nav-item"></li>
                <Link class="btn btn-danger navbar-btn" onClick={handleSignoutClick}>Sign Out</Link> 
            </ul>
          </div>
        </div>
      </nav>
          
 
    
)
  }
       
            export default NavBar;

      
