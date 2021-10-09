import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';


function ExpensePage({user, expense, month, category}){
 
   
    return(
        
        <div class="container">
            <h2>Expenses</h2>
            <table class="table">
                <thead class="thead-dark">
                <tr>
                    <th>Amount</th>
                        <td>{expense}</td>
                    <th>Category</th>
                        <td></td>
                    <th>Month</th>
                        <td></td>
                    <th>Date</th>
                        <td></td>
                    <th>Description</th>
                        <td></td>

                </tr>
                </thead>
            </table>
          
        </div>
         
    )
}

export default ExpensePage;