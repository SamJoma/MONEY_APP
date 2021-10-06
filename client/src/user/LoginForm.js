import React from 'react';
import {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom"
import {Button, Col, Container, Form, Row} from "react-bootstrap";

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
            credentials: 'include',
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
        // <div className="login-form-full"> 
        // <form onSubmit={handleSubmit} autoComplete="off"> 
        //     <input 
        //     type="text"
        //     id="username"
        //     placeholder ="username.."
        //     // variant="outlined"
        //     value={username}
        //     onChange={(e) => setUserName(e.target.value)}
        //     />
        //     <input 
        //         type ="password"
        //         id = "password"
        //         placeholder = "password.."
        //         value = {password}
        //         onChange={(e) => setPassword(e.target.value)}
        //     />
        //     <br></br>
        //     <button type ="submit"> Submit </button>
        // </form>
        // </div>

        
       

   
        <>
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">User Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={handleSubmit} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                 />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                value = {password}
                                onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>

                            <Button type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Sam Jomaiv Inc. All Rights Reserved.</h6>
            </Container>
        </>
    );
};


  


export default LoginForm;