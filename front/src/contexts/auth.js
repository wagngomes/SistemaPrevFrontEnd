import { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { api, createSession } from "../services/api";
import jwt_decode from 'jwt-decode'


export const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('usuario')
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false)

    }, [])

    const login = async (email, senha) => {
        

        const response = await createSession(email, senha)
        const token = response.data.accessToken
        const loggedUser = jwt_decode(token) 
        
    

        localStorage.setItem('usuario', JSON.stringify(loggedUser.user))
        localStorage.setItem('email', JSON.stringify(loggedUser.email))
        localStorage.setItem('id', JSON.stringify(loggedUser.id))
        localStorage.setItem('token', token)

        api.defaults.headers.Authorization = `Bearer ${token}`
        
        setUser(loggedUser.user)
        navigate('/planejador')

    }

    const logout = () => {
        console.log('logout')
        localStorage.removeItem("usuario")
        localStorage.removeItem("email")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate('/')
    }
    return (<AuthContext.Provider value={{authenticated: !user, user, loading, login, logout}}>{children}</AuthContext.Provider>)
}