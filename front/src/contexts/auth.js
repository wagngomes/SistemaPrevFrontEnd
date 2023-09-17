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
        const recoveredUser = localStorage.getItem('user')
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false)

    }, [])

    const login = async (email, senha) => {
        const response = await createSession(email, senha)
        const token = response.data.accessToken

        //const loggedUser = response.data.user
        const loggedUser = jwt_decode(token) 

        console.log(response)
        console.log(loggedUser.email)
        console.log(loggedUser.user)

        localStorage.setItem('user', JSON.stringify(loggedUser))
        localStorage.setItem('token', token)

        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser)
        navigate('/planejador')

    }

    const logout = () => {
        console.log('logout')
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        setUser(null)
        navigate('/')
    }
    return (<AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>{children}</AuthContext.Provider>)
}