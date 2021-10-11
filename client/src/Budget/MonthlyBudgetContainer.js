import React, { useState } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm';
import {useHistory} from 'react-router-dom'
import MyBudgetCardFront from './MyBudgetCardFront'
import { Container, Row, Col } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/TextField';
import makeStyles from '@material-ui/styles/makeStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  text: {
      color:'white'
  },
  icons : {
      marginRight: '5px',
      marginLeft: '5px',
      width: '30px'
  }
})

function MonthlyBudgetContainer({user,month, setMonth, category,  categoryBudget, setCategoryBudget}) {

  const { id } = month


  function handleDelete(){
    fetch(`/category_budget/${id}`, {
      method:"DELETE",
      headers: {Accept: 'application/json'}
    })
    .then(res => res.json())
       .then(data =>setMonth(data)) 
  }

  // function handleDelete(){
  //   console.log("Deleted")
  //   fetch(`/workout_logs/${id}`, {
  //       method: 'DELETE',
  //       headers: { Accept: 'application/json' }
  //   })
  //   .then(deleteWorkoutLogItem(id))
  //   setTotal((total) => (total > 0) ? total - 1 : 0)

    

  const categories = month?.category_budgets?.map(catObj => {
    // console.log(catObj);
    return <MyBudgetCardFront key={catObj.id} catObj={catObj} handleDelete={handleDelete} setCategoryBudget={setCategoryBudget} category={category} />
  })
  
  

    return (
    
           <div> 
       
      
      <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
        
      />
    </Stack>
    {categories}
    </div>
   
    
        
    )
}

export default MonthlyBudgetContainer;
