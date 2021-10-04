
import React, { useState, Component } from 'react';
import {withRouter} from 'react-router-dom';
import {useHistory} from 'react-router-dom'

function UserProfile({ user, setUser }){
    const [ open, setOpen ] = useState(false)
    const [ editName, setEditName ] = useState(user.username)
    const [ errors, setErrors ] = useState([])
    const history = useHistory()

 function handleEditProfile(e) {
     e.preventDefault()
     const profObj ={
         username:editName 
     }
     fetch ('/editprofile', {
         method:'PATCH',
         headers: {'Content-Type':'applicatio/json'},
         body: JSON.stringify(profObj) 
     })
     .then(res => { if (res.ok) { res.json().then(editedUser =>  setUser(editedUser)).then(setOpen)
     } else {
        res.json().then(err => setErrors(err.errors)).then(setOpen(true))
         }
     })
 }

 function handleClose(){
    setOpen(false)
    setEditName('')
    
}

  function handleDelete() {
    let resp = window.confirm("Are you sure you would like to delete your account?");
    if (resp === true) {
      fetch(`/users/${user.id}`,
       {method: 'DELETE'})
      alert('User has been deleted');
      history.push('/login');
    }
  }

  
 
    return (
      <div className="profile-container" style={{ color: 'black' }}>
        <h1>Welcome, {user.username}!</h1>
        <div className='profile-info'>
          <p>
            Account Name: {user.username}
          </p>
          <input
          onChange={(e)=>this.handleChange(e)}
          placeholder='Update Username'
          value={user.username}/>
          <button> Update Username </button>
          <button onClick={handleDelete}> Delete Account </button>
        </div>
      </div>
    )
  }


export default UserProfile;