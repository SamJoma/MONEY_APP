import LoginForm from "./LoginForm"
import { useState } from "react";
import SignUpForm from "./SignUpForm"
function Login({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div> 
        <h1>Login / Signup</h1>
        {showLogin ? 
        (
            <>
            <LoginForm setUser={setUser} />
            <div>
                Not a member? <span onClick={() => setShowLogin(false)}>Sign up</span>
            </div>
            </>
        )
         : 
        (
             <>
             <SignUpForm setUser={setUser}/>
             <div>
                Already a member? <span onClick={() => setShowLogin(true)}>Login</span>
            </div>
             </>
        )
        
        }
    </div>
)
}

export default Login;