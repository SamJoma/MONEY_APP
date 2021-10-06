import React, { useState } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm';
import {useHistory} from 'react-router-dom'
// import MyBudgetCardFront from './MyBudgetCardFront'

function MonthlyBudgetContainer({user,months, setMonths, category, setCategoryBudget}) {
  
  // const catgories = category.map(catObj => {
  //   console.log(catObj);
    
  //   return <MonthlyBudgetForm key={catObj.id} catObj={catObj} />
   
  // })
  
  

    return (
        <div> 
             <div className='divlogin-header'>{user.username}: Set a monthly budget!</div>
             <br></br>
             <h1>Set your Budget</h1>
             <MonthlyBudgetForm user={user} category={category} />

        </div>
        
    )
}

export default MonthlyBudgetContainer;
