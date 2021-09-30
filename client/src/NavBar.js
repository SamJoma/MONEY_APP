import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useHistory } from "react-router-dom"
import MoneyApp from "./MoneyApp"


function NavBar({ handleSignoutClick, user, setUser }) {
  
    const history = useHistory()

  // let className = selected ? 'headerlink-no-link ' : '';
  // className += 'headerlink-title';
   
   
    return (
          <div class="nav">
            <nav>
              <ul>
                <li>
                  <Link to="/mymoneyapp">Home</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/my-budget">My Budget</Link>
                </li>
                <li>
                  <Link to="/expenses">Expenses</Link>
                </li>
                <li className="signout-button" onClick={handleSignoutClick}>Sign Out</li> 
              </ul>
            </nav>
            </div>
    
            
        )}
            export default NavBar;









        {/* //     <body class="news">
        //     <header>
        //       <div class="nav">
        //         <ul>
        //           <li className="home">Home</li>
        //           <li className="profile">Profile</li>
        //           <li className="my-budget">My budget </li>
        //           <li className="expenses">Expenses</li>
        //           <li className="signout-button" onClick=//{handleSignoutClick}>Sign Out</li> 
        //         </ul>
        //       </div>
        //     </header>
        //   </body> 
        )}
        export default NavBar;


        //     <div className='App'>
        //       <Router>
        //         <Route exact path='/' component={MoneyApp} /> 
        //         <Route exact path='/profile' component={UserProfile} />Hi <Route></Route>
        //         <Route exact path='/mybudget' component={MyBudget} />
        //         <Route exact path='/expenses' component={Expenses} />
        //         <button className="signout-button" onClick={handleSignoutClick}>Sign Out</button>
        //       </Router>
        //     </div>
        //   );
        // }


//        <>
//           <div class="nav"></div>
//         <Switch>
//           <Route class="home" path="/mymoneyapp">
//             <MoneyApp />
//           </Route>
//           <Route className="profile" path="/Profile">
//             <UserProfile user={user} setUser={setUser} />
//           </Route>
//           <Route className="my-budget" path="/mybudget" component ={MyBudget}>
//             <MyBudget user ={user} />
//           </Route>
//           <Route className="expenses" path="/Expenses">
//             <Expenses user ={user} /> 
//           </Route>
//         </Switch>
//         <button className="signout-button">Sign Out</button>
       
//    </>


//     )
// } */}



 
