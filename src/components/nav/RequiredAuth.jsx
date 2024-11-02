import React from 'react'
import { useAuth } from './Auth'
import { Navigate, useLocation } from 'react-router-dom';

const RequiredAuth = ({children}) => {
    const location = useLocation()
    const auth = useAuth();
    if (!auth.user) {
        return <Navigate to="/login" state={{path:location.pathname}} /> 
    } else
  return (
    <div>
{children}
    </div>
  )
}

export default RequiredAuth
