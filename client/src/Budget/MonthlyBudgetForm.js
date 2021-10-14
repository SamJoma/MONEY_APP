import React,{useState, usesEffect} from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function MonthlyBudgetForm({user, amount, setAmount, month, setMonth, category}) {

    const [selectCategory, setSelectCategory] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()
  

    const newBudget = {
      monthly_budget_id: month.id,
      category_id: selectCategory,
      amount: amount
    }

    function handleMonthBudgetSubmit(e) {
        setErrors([])
         e.preventDefault()
          fetch('/category_budgets', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(newBudget)       
           })
           .then((r) => {
             if (r.ok) {
               r.json().then((budget) => {
                setMonth({...month,category_budgets:[...month.category_budgets,budget]})
                 
               });
               history.push('/mymoneyapp');
             } else {
               r.json().then((err) => setErrors(err.errors));
             }
         });
       }
     

    return (
        <form onSubmit={handleMonthBudgetSubmit} class="form-group" >
            <label for="sel1">Select Budget Categories</label>
            <select onChange={(e) => setSelectCategory(e.target.value)} value ={selectCategory} class="form-control" id="sel1">
              <option value="0">select category</option>
               {category.map(catObj => {
                 return <option value={catObj.id}>{catObj.name}</option>
               })}
              
            </select>
            <input 
                value={amount}
                type="number"
                placeholder="enter amount..."
                id ="amount"
                onChange={(e) => setAmount(e.target.value)}
            />
            <button>Submit</button>
        </form>
    )
} 

        // <div> 
        // <h1>{user.username}: Set a monthly budget!</h1>
        // <br></br>
        // <h1>This Month's Budget</h1>
        //     <input
        //     type="number"
        //     placeholder="enter amount..."
        //     id ="amount"
        //     value = {}
        //     /> 
        //     <select
        //     type="number"
        //     placeholder="enter amount..."
        //     id ="amount"
        //     value = {}
        //     /> 
          
        //     </div>

//     )
// }
export default  MonthlyBudgetForm;