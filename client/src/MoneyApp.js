import createTypography from "@material-ui/core/styles/createTypography";
import {useState} from 'react'
function MoneyApp({user, expenses}) {
    console.log(user)
    const [showDetail, setShowDetail] = useState(false)
    const [detailBudget, setDetailBudget] = useState('')
    return (
      
        <h1> 
    Welcome to Money App 
    <div className="category-tiles"> {user.username}  </div>
    {user.expenses}
        </h1>

        
    )
}
export default MoneyApp;