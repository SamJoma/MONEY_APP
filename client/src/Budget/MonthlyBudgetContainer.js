import React, { useState } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm';
import {useHistory} from 'react-router-dom'
import MyBudgetCardFront from './MyBudgetCardFront'
import { Container, Button, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import { Form } from 'styled-components'


function MonthlyBudgetContainer({user, months, setMonths, category, useHistory, expenses, setExpenses, setCategoryBudget}) {

  const [selectedDate, setSelectedDate] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])
  const [showExpForm, setShowExpForm] = useState(true)
  const [selectedMonth, setSelectedMonth] = useState(months.name)
  const [selectedAmount, setSelectedAmount] = useState("")
  const history =useHistory()
  const { id } = months
  

const Forms = styled.form`
   width: 100%;
`

  const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black ;
  color: darkblue;
  margin: 0 0em;
  padding: 0.25em 1em;
`


  const newExpense = {
     user_id: user.id,
     category_id: selectCategory,
     date: selectedDate,
     description: description,
     amount: selectedAmount,
     monthly_budget_id: selectedMonth
  }


  function handleDelete(id){
    fetch(`/category_budgets/${id}`, {
      method:"DELETE",
      headers: {Accept: 'application/json'}
    })
       .then(() =>setMonths({...months, category_budgets: months.category_budgets.filter(cat => cat.id!=id)})) 
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
           r.json().then((data) => {
            setExpenses([...expenses, data]) 
              // console.log(expenses)
           });
           history.push('/expenses');
         } else {
           r.json().then((err) => setErrors(err.errors));
         }
     });
   }
  



  const categories = months?.category_budgets?.map(catObj => {
    // console.log(catObj);
    return <MyBudgetCardFront key={catObj.id} months={months} setMonths={setMonths} catObj={catObj} handleDelete={handleDelete} setCategoryBudget={setCategoryBudget} category={category} />
  })
  
  // const displayExpense = expenses.
  // console.log(expenses)

    return (
      <div>
      <div className='form-group'>
         <div>
        <Button onClick={()=> setShowExpForm(!showExpForm)}> Add Expense </Button>  
        </div>
        {!showExpForm && 
    <Forms onSubmit ={handleSubmitExpense} class="form-group">
    <div className='form-group'>
      <select class="card" onChange={(e) => setSelectCategory(e.target.value)}  value={selectCategory}>
      <option value="0">select category</option>
        {category.map(catObj => {
        return <option value={catObj.id}>{catObj.name}</option>
         })}
      </select> 
      </div>
      <div className='form-group'>
      <select class="card" onChange={(e) => setSelectedMonth(e.target.value)}  value ={selectedMonth}>
      <option value="0">select month</option>
      <option value={months.id}>{months.name}</option>
      </select> 
      </div>
      <div> 
      <input onChange={(e) => setDescription(e.target.value)} value ={description} class="card" placeholder="description" />
      </div> 
      <div class='card'> 
      <input type="number" className="card" onChange={(e) => setSelectedAmount(e.target.value)} value ={selectedAmount}  placeholder="amount" />
      </div>
      <div class="card"> 
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
       </div>  
       <Button class="btn btn-dark navbar-btn" >Submit</Button>
       </Forms>}
       </div>
      <Container class="container">{categories}</Container>
    </div>
    ) 
}
export default MonthlyBudgetContainer;
