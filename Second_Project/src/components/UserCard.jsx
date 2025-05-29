import React from 'react'

const UserCard = ({name, age, isOnline}) => {
     
  return (
    <div>
        <h2> Name: {name} </h2>
        <p> Age: {age} </p><br/>
        <p> Status: {isOnline? 'Online':'Offline' } </p>

    </div>
  )
}

export default UserCard
