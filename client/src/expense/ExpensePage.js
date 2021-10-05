import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';


function ExpensePage({user, categoryBudget, setCategoryBudget}){
    const [expenses, setExpenses] = useState([])
    const [toggleDetails, setToggleDetails] = useState(false)

       
    
        
    return(
        
        <div class="container">
            <h2>Expenses</h2>
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th>User</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Month</th>

                </tr>
                </thead>
            </table>
          
        </div>
         
    )
}

export default ExpensePage;