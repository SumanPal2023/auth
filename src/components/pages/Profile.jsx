import React from 'react'
import { useAuth } from '../nav/Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const auth = useAuth()
  const nav = useNavigate()
  const logout=()=>{
    auth.logout()
    nav("/")

  }
  return (
    <div>
      <h2>welcome {auth.user}</h2>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Profile
