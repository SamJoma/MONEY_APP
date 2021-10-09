import React from 'react'
import ExpensePage from './ExpensePage'

function AddExpenseContainer({ expenses, month, category}) {

    const expensesList = expenses.map(expense => {
        return <ExpensePage key={expense.id} expense={expense} />
    });

    return (
        <div>
          <ExpensePage/>  
        </div>
    )
}

export default AddExpenseContainer
