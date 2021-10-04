import React, { useState } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm';
import {useHistory} from 'react-router-dom'


function MonthlyBudget({user, categoryBudget, setCategoryBudget}) {
  

    return (
        <div> 
             <h1>{user.username}: Set a monthly budget!</h1>
             <br></br>
             <h1>Set your Budget</h1>
       <MonthlyBudgetForm user={user} categoryBudget={categoryBudget} setCategoryBudget={setCategoryBudget}/>

        </div>
        
    )
}

export default MonthlyBudget;
