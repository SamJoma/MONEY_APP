import React, { useState } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm';
import {useHistory} from 'react-router-dom'
import MyBudgetCardFront from './MyBudgetCardFront'
import { Container,Form, Button, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'



function MonthlyBudgetContainer({user, amount, setAmount, month, setMonth, category,  categoryBudget, useHistory, setCategoryBudget}) {


  const [selectedDate, setSelectedDate] = useState(null);
  const [addExpense, setAddExpense] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("")
  const [errors, setErrors] = useState([])
  const [showExpForm, setShowExpForm] = useState(true)

  const history =useHistory()
  const { id } = month
  
  // function toggleExpForm() {
  //   setShowExpForm(!showExpForm)
  // }
  

  const newExpense = {
    category_id: selectCategory,
     date: date,
     description: description,
     amount: amount
  }

  function handleDelete(id){
   
    fetch(`/category_budgets/${id}`, {
      method:"DELETE",
      headers: {Accept: 'application/json'}
    })
       .then(() =>setMonth({...month, category_budgets: month.category_budgets.filter(cat => cat.id!=id)})) 
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
            setAddExpense(...amount, expense) 
             console.log(expense)
           });
           history.push('/mymoneyapp');
         } else {
           r.json().then((err) => setErrors(err.errors));
         }
     });
   }


  const categories = month?.category_budgets?.map(catObj => {
    // console.log(catObj);
    return <MyBudgetCardFront key={catObj.id} month={month} setMonth={setMonth} catObj={catObj} handleDelete={handleDelete} setCategoryBudget={setCategoryBudget} category={category} />
  })
    return (
      <div>
      <div className='form-group'>
         <div>
        <button onClick={()=> setShowExpForm(!showExpForm)}> Add Expense </button>  
        </div>
        {!showExpForm && 
    <Form onSubmit ={handleSubmitExpense} class="form-group">
    <div className='form-group'>
      <select class="card" onChange={(e) => setSelectCategory(e.target.value)}  value ={selectCategory}>
      <option value="0">select category</option>
        {category.map(catObj => {
        return <option value={catObj.id}>{catObj.name}</option>
         })}
      </select> 
      </div>
      <div> 
      <input onChange={(e) => setDescription(e.target.value)} value ={description} class="card" placeholder="description" />
      </div> 
      <div class='card'> 
      <input type="number" className="card" onChange={(e) => setAmount(e.target.value)} value ={amount}  placeholder="amount" />
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
       <button class="btn btn-dark navbar-btn" >add Expense</button>
       
       </Form>}
       </div>
      <Container class="container">{categories}</Container>
    </div>
  
    ) 
}
export default MonthlyBudgetContainer;
