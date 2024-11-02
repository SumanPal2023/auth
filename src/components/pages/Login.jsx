import React, { useState } from 'react'
import { useAuth } from '../nav/Auth'
import { useLocation, useNavigate } from 'react-router-dom'


const Login = () => {
  const loaction = useLocation()
  console.log(loaction)
  const[user,setUser] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()
  const redirect = loaction.state?.path ||'/'
  console.log(redirect)
  const handleClick=()=>{
    auth.login(user)
    // navigate("/",{replace:true})
    navigate(redirect,{replace:true}) // u can use any method

 
  }
  return (
    <div>
       <label htmlFor="">
        user name: <input type="text" onChange={(e)=>{setUser(e.target.value)}}/>
        <button onClick={handleClick}>Login</button>
       </label>
    </div>
  )
}

export default Login
