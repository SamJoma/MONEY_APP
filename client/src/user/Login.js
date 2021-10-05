
import LoginForm from './LoginForm';
import { useState } from "react";
import SignUpForm from "./SignUpForm"
// import MoneyApp from "./MoneyApp"

function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login"> 
        
        {showLogin ? 
        (
            <>
            <LoginForm setUser={setUser} />
            <div>
                <h3>Not a member? <span onClick={() => setShowLogin(false)}>Sign up</span></h3>
            </div>
            </>
        )
         : 
        (
             <>
             <SignUpForm setUser={setUser}/>
             <div>
                <h3>Already a member? <span onClick={() => setShowLogin(true)}>Login</span></h3>
            </div>
             </>
        )
        
        }
    </div>
)
}

export default Login;














