import React,{useState} from 'react'

function ExpensePage({user, categoryBudget, setCategoryBudget}){
    const [expenses, setExpenses] = useState([])
    const [toggleDetails, setToggleDetails] = useState(false)

    // const { id, name, intensity, duration } = workout
    // const newWorkoutLog = {
    //     user_id: user.id,
    //     expense_id: expense.id,
    //     amount: categoty_budget.amount,
    //     name: ''
    // }

    // console.log('workout:', workout)


    

    // function handleShowDetail(){
    //     if(toggleDetails === false) {
    //     fetch(`/workouts/${id}`)
    //     .then(res => res.json())
    //     .then(data => setExpenses(data.expenses))
    //     .then(setToggleDetails(true))
    //     } else {
    //         setToggleDetails(false)
    //     }
    // }

    // console.log(expenses)
    
    return (
       
                <div className="expense-container">
                    <ul>
                        <div  className="expenses"><strong>expenses</strong></div>
                        <br></br>
                        <li>  100  
                                $  
                       
                          <strong> Shopping , Month</strong>
                               
                        </li> 

                        

                            {/* {toggleDetails ?
                                (
                                    <>
                                    <p><strong>EXERCISES</strong></p>
                                    {exercises.map(exercise => (
                                    <p key={exercise.id}>{exercise.title} &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; recommended reps: {exercise.recommended_reps ? `${exercise.recommended_reps}` : `n/a`} &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp; equipment: {exercise.equipment ? exercise.equipment : "none"}</p>
                                    ))}
                                    </>
                                )
                                :
                                null
                            } 
                           
                            <button> show details
                            {/* onClick={handleShowDetail}>
                                {toggleDetails ? "hide details" : "show details"} </button> */}
                             
                    </ul>
                </div>
    
    )
}

export default ExpensePage;