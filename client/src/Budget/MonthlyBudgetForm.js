import React,{useState, usesEffect} from 'react'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function MonthlyBudgetForm({user, categoryBudget, setCategoryBudget}) {
    const [monthlyBudget, setMonthlyBudget] = useState("")
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const newBudget = {
      monthly_budget_id: categoryBudget.monthly_budget_id,
      category_id: categoryBudget.category_id,
      amount: categoryBudget.amount
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
                 setMonthlyBudget(budget) 
                 
               });
               history.push('/mybudget');
             } else {
               r.json().then((err) => setErrors(err.errors));
             }
         });
       }


    
      
    

    return (
        <div class="form-group" >
            <label for="sel1">Select Budget Categories</label>
            <select class="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            <input 
                type="number"
                placeholder="enter amount..."
                id ="amount"
            />
            <button onSubmit={handleMonthBudgetSubmit}>Submit</button>
        </div>
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