//? This is a protected route component that will be used to protect routes that require authentication.
import { useNavigate,Route } from "react-router-dom";
import { useEffect } from "react";



const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate()

    // if in local storage  user is there it will be true else false

    const isAuthenticated = localStorage.getItem('user') ? true : false
   
    
    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login')
        }
    }
    ,[isAuthenticated,navigate])

 
     return children

}

export default ProtectedRoute

