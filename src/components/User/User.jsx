import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId}=useParams()
    console.log("userId======>",userId)
  return (
    <div>
      <h1>User:{userId}</h1>
    </div>
  )
}

export default User
