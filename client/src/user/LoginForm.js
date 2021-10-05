import React from 'react';
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"

function LoginForm({setUser}) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit (e) {
        setErrors([])
        e.preventDefault();
        setIsLoading(true);
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                username: username,
                password: password
                }),
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                });
                history.push('/mymoneyapp');
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    return(
        <div className="login-form-full"> 
        <form onSubmit={handleSubmit} autoComplete="off"> 
            <input 
            type="text"
            id="username"
            placeholder ="username.."
            // variant="outlined"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            <input 
                type ="password"
                id = "password"
                placeholder = "password.."
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button type ="submit"> Submit </button>
        </form>
        </div>
    )
    

}


export default LoginForm;