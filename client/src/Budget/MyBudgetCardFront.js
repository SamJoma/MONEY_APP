import React from 'react';
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Card'


function MyBudgetCardFront({user}) {
    
    return (
<div ClassName="card-item"> 
<div className="card" >
  <img className="card-img-top"  src="https://media.istockphoto.com/photos/man-at-the-shopping-picture-id868718238?k=20&m=868718238&s=612x612&w=0&h=w42q_p1qak9lhVhXKDw1r964uV-AmzSSzC0UsMlMARQ=" alt="Card image"/>
  <div className="card-img-overlay">
    <h4  style={{backgroundColor: "white"}}
  className="card-title" >Category</h4>
    <p className="card-text" style={{backgroundColor: "white"}}>amount: 500$</p>
    <a href="#" className="btn btn-dark">See Details</a>
  </div>
</div>
</div>
    )
}
 
 
export default MyBudgetCardFront;