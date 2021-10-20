import React from 'react'
import ExpensePage from '../expense/ExpensePage'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';

function AddExpenseContainer({expenses}) {

// console.log(expenses)

const expenseList = expenses?.map(expense => {
    return  <ExpensePage key={expense.id} expense={expense} />
  
   });
    return (
        
        <div class="container">
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th>Amount</th>
                       
                    <th>Category</th>
                       
                    <th>Month</th>
                       
                    <th>Date</th>
                      
                    <th>Description</th>
                      

                </tr>
                </thead>
                {expenseList}
            </table>
          
        </div>
           
          
     
    )
}

export default AddExpenseContainer;
