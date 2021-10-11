import React, { useState } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm';
import {useHistory} from 'react-router-dom'
import MyBudgetCardFront from './MyBudgetCardFront'
import { Container,Form, Button, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



function MonthlyBudgetContainer({user,month, setMonth, category,  categoryBudget, useHistory, setCategoryBudget}) {

  const [selectedDate, setSelectedDate] = useState(null);
  const [addExpense, setAddExpense] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])

  
  const { id } = month
  const history =useHistory()
  

  const newExpense = {
    category_id: selectCategory,
     date: date,
     description: description,
     amount: amount
  }

  function handleDelete(){
    fetch(`/category_budget/${id}`, {
      method:"DELETE",
      headers: {Accept: 'application/json'}
    })
    .then(res => res.json())
       .then(data =>setMonth(data)) 
       history.push('/mymoneyapp')
  }

 
  function handleSubmitExpense(e) {
    setErrors([])
     e.preventDefault()
      fetch('/expenses', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(newExpense)       
       })
       .then((r) => {
         if (r.ok) {
           r.json().then((expense) => {
            setAddExpense(expense) 
             
           });
           history.push('/mymoneyapp');
         } else {
           r.json().then((err) => setErrors(err.errors));
         }
     });
   }


  const categories = month?.category_budgets?.map(catObj => {
    // console.log(catObj);
    return <MyBudgetCardFront key={catObj.id} catObj={catObj} handleDelete={handleDelete} setCategoryBudget={setCategoryBudget} category={category} />
  })
  
    return (
      <>
    <Form onSubmit ={handleSubmitExpense} class="form-group">
    
      <select onChange={(e) => setSelectCategory(e.target.value)}  value ={selectCategory}>
      <option value="0">select category</option>
  {category.map(catObj => {
    return <option value={catObj.id}>{catObj.name}</option>
  })}
  </select> 

   
      <input onChange={(e) => setDescription(e.target.value)} value ={description} class="inline" placeholder="description" />
   
      <input type="number" className="inline" onChange={(e) => setAmount(e.target.value)} value ={amount}  placeholder="amount" />
    
    </Form>
      <DatePicker selected={selectedDate}
       onChange={date => setSelectedDate(date)}
       dateFormat='dd/MM/yyyy'
      //  minDate={new Date()}
      // filteredDate = {date => date.getDay()-7 &&date.getDay()+0}
       placeholderText="Select a date"
       isClearable
       showYearDropdown
       scrollableMonthYearDropdown
       />
       <button class="btn btn-dark navbar-btn" >add Expense</button>
       <Container class="grid">{categories}</Container>
      
    </>
    ) 
}
export default MonthlyBudgetContainer;
