import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';


function ExpensePage({user, categoryBudget, setCategoryBudget}){
   
   
    return(
        
        <div class="container">
            <h2>Expenses</h2>
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
            </table>
          
        </div>
         
    )
}

export default ExpensePage;