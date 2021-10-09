import React, { useState } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm';
import {useHistory} from 'react-router-dom'
import MyBudgetCardFront from './MyBudgetCardFront'
import { Container, Row, Col } from "react-bootstrap";



function MonthlyBudgetContainer({user,month, setMonths, category, setCategoryBudget}) {
  const categories = month?.category_budgets?.map(catObj => {
    // console.log(catObj);
    return <MyBudgetCardFront key={catObj.id} catObj={catObj} />
  })
  
  

    return (
            <Container> 
             <div className='divlogin-header'>{user.username}: Set a monthly budget!</div>
             <br></br>
             <h1>Set your Budget</h1>
             {categories}
               
        </Container>
        
    )
}

export default MonthlyBudgetContainer;
