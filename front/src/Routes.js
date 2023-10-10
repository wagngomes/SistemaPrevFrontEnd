import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Transferencia from './pages/Transferencia/Transferencia'
import Previsao from './pages/Previsao/Previsao'
import Solicitacoes from './pages/Solicitacao/Solicitacao'
import Dashboard from './pages/Dashboard/Dashboard'
import Planejador from './pages/Planejador/Planejador'
import MySideNav from './componentes/SideNav/SideNav'
import Login from './pages/Login/Login'

import { AuthProvider, AuthContext } from './contexts/auth';
import { useContext } from 'react'

const Rotas = () => {

    const Private = ({children}) => {

        const { authenticated, loading } = useContext(AuthContext)

        if (loading) {
            return <div className="loading">Carregando...</div>
        }
        if (!authenticated){
            return <Navigate to="/" />
        }
        return children
    }

    return (

        <BrowserRouter>

        <AuthProvider>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path="/Transferencia" element={<MySideNav><Transferencia /></MySideNav>} />
                <Route exact path="/Previsao" element={<MySideNav><Previsao /></MySideNav>} />
                <Route exact path="/Solicitacao" element={<MySideNav><Solicitacoes /></MySideNav>} />
                <Route exact path="/Dashboard" element={<MySideNav><Dashboard /></MySideNav>} />
                <Route exact path="/Planejador" element={<Private><MySideNav><Planejador /></MySideNav></Private>} />
            </Routes>
        </AuthProvider>
        </BrowserRouter>
    )
}

export default Rotas