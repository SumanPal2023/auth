import { createContext, useContext, useState } from "react"

 const AuthApi = createContext(null);

 export const AuthProvider = ({children}) => {
    const[user,setUSer]= useState(null);
    const login = (user)=>{
        setUSer(user)
    }
    const logout=()=>{
        setUSer(null)
    }
  return (
    <AuthApi.Provider value={{user,login,logout}}>
        {children}
    </AuthApi.Provider>
  )
}
export const useAuth=()=>{
    return useContext(AuthApi)
}
