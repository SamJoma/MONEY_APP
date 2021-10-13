// import React from 'react';
// import Card from 'react-bootstrap/Card'
// import Nav from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Card'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// function MyBudgetCardFront({user}) {
    
//     return (
//         <div ClassName="card-item"> 
//             <div className="card" >
//                 <img className="card-img-top"  src="https://media.istockphoto.com/photos/man-at-the-shopping-picture-id868718238?k=20&m=868718238&s=612x612&w=0&h=w42q_p1qak9lhVhXKDw1r964uV-AmzSSzC0UsMlMARQ=" alt="Card image"/>
//                     <div className="card-img-overlay">
//                         <h4  style={{backgroundColor: "white"}}
//                         className="card-title" >Category</h4>
//                         <p className="card-text" style={{backgroundColor: "white"}}>amount: 500$</p>
//                         <a href="#" className="btn btn-dark">See Details</a>
//                    </div>
//             </div>
//         </div>
//     )
// }

import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import ProgressBarChart from './ProgressBarChart.js'
import "../Box.css";
import { Card } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/TextField';
import makeStyles from '@material-ui/styles/makeStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { grey } from '@material-ui/core/colors';

 function MyBudgetCardFront({catObj, handleDelete}) {

  // function handleDelete(){

  // }
   
    
    // const catgoryCards = category.map(catObj => {
    //       return key={catObj.id} categoryName={catObj.name} 
    //    })

      //  const now = catObj.amount
  return (
   
      <div class="card-group"> 
    <Card  className="box">
  
    <Card.Body >
    {/* <ProgressBarChart  now={now} label={`${now}%`} /> */}
      <Card.Title>{catObj.category.name}</Card.Title>
      <Card.Text>${catObj.amount}</Card.Text>
      <button onClick={()=>handleDelete(catObj.id)}>delete</button>
    </Card.Body >
  </Card>
  {/* <IconButton onClick={handleDelete}  size="large">
                    <DeleteIcon fontSize="small" style={{ color: grey[50] }} />
                </IconButton> */}
                
  </div>
)
};
export default MyBudgetCardFront;

{/* // return <div className="grid">{cardInfo.map(renderCard)}</div>;


    //   <>
    // <ProgressBarChart now={now} label={`${now}%`} />

    // <Card sx={{ minWidth: 275 }}>
    //   <CardContent>
    //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
    //     </Typography>
    //     <Typography variant="h5" component="div">
    //   Category
    //     </Typography>
    //     <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
    //     </Typography>
    //     <Typography variant="body2">
         
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">Learn More</Button>
    //   </CardActions>
    // </Card>
    // </>
  //);
//}
  */}