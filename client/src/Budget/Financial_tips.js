import createTypography from "@material-ui/core/styles/createTypography";
import {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';

function Financial_tips({user,setUser, expenses, finTips, setFinTips}) {
   
    const [showDetail, setShowDetail] = useState(false)
    const [detailBudget, setDetailBudget] = useState('')

  const tips = finTips?.map(tip => {
    return (
       <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              
            </Typography>
            <Typography variant="h5" component="div">
             
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {tip.value}
            </Typography>
           
          </CardContent>
         
        </React.Fragment>
    )
  })

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          
        </Box>
      );
      
   

    return (
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{tips}</Card>
            </Box>
          );
        }
export default Financial_tips;