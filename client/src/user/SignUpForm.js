import  {useState, useEffect} from 'react'
// import MoneyApp from "./MoneyApp"
import { useHistory } from "react-router-dom"
import styled from "styled-components";
import {Button, Col, Container, Form, Row} from "react-bootstrap";


function SignUpForm({setUser}) {
    const [ username, setUserName ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirmation, setPasswordConfirmation ] = useState('')
    const [ avatarUrl, setAvatarUrl ] = useState('')
    const [ weeklyGoal, setWeeklyGoal ] = useState('')
    const [ errors, setErrors ] = useState([])
    const history = useHistory()
   
    


    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: username,
            password: password,
           
            
    }
    fetch('/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify (user)
    })
    
    .then(res => {
        if (res.ok) {
            res.json().then(user => setUser(user)) 
            } else {
                res.json().then(err => setErrors(err.errors))
            }
    })
            history.push('/mymoneyapp')
        }
    return (
        // <>
        //     <form onSubmit={hasndleSubmit}>
        //         <label>
        //             Username
        //             <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
        //         </label>
        //         <label>
        //             Password
        //             <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        //         </label>
        //         <label>
        //             Confirm Password
        //             <input type='password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
        //         </label>
                
               
                
        //         <button type='submit' value='Get Started'>Submit </button>
        //     </form>
        //     {(errors.length > 0) ? 
        //     (
        //         <ul>
        //             {errors.map(err => (
        //                 <li key={err}>{err}</li>
        //             ))
        //             }
        //         </ul>

        //     )
        //     :
        //     null
        //     }
        // </>



        <>
            <Container>
                <h1 className="shadow-sm  mt-5 p-3 text-center rounded">User Sign-Up</h1>
                <Row className="mt-9">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={handleSubmit} >
                            <Form.Group className="formBasicEmail">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Enter email"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                 />
                            </Form.Group>

                            <Form.Group contrclassNameolId="formBasicPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                value = {password}
                                onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="formBasicPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" 
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                            </Form.Group>
                                <br></br>
                                <br></br>
                           

                            <Button className='shadow-sm ' type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2021 Sam Jomaiv Inc. All Rights Reserved.</h6>
            </Container>
        </>
    )
}


export default SignUpForm;