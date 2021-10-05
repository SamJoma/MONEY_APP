import React, { useState } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm';
import {useHistory} from 'react-router-dom'
import MyBudgetCardFront from './MyBudgetCardFront'

function MonthlyBudget({user, categoryBudget, setCategoryBudget}) {
  
  const catgories = categoryBudget.map(category => {
    <MyBudgetCardFront key={category.id} category={category.category_id} />
  })
   

    return (
        <div> 
             <div className='divlogin-header'>{user.username}: Set a monthly budget!</div>
             <br></br>
             <h1>Set your Budget</h1>
       <MonthlyBudgetForm user={user} categoryBudget={categoryBudget} setCategoryBudget={setCategoryBudget}/>

        </div>
        
    )
}

export default MonthlyBudget;
