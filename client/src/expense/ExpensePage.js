import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';


function ExpensePage({user, handleDeleteExpense, expense, month }) {
    // console.log(expense)

    return(
        <tr>
            <td>${expense.amount}</td>
            <td>{expense.category.name}</td>
            <td>{expense.monthly_budget.name}</td>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td> <button  onClick={() => handleDeleteExpense(expense)}>Delete </button> </td>
        </tr>
    )
}

export default ExpensePage;