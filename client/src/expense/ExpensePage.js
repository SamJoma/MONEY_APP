import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';


function ExpensePage({user, expense, expenseList, description, category, month, }){


    return(
       
        
          
        
                <tr>
                    
                        <td>{expense.amount}</td>
                  
                        <td>{expense.category.name}</td>
              
                        <td>{expense.monthly_budget.name}</td>
                  
                        <td>{expense.date}</td>
                  
                        <td>{expense.description}</td>

                </tr>
             
       
          
 
         
    )
}

export default ExpensePage;