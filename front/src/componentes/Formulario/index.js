import { useContext, useState } from "react"
import './Formulario.css'
import { TextField } from "@mui/material"
import { AuthContext } from "../../contexts/auth"

const Formulario = () => {


    const {login} = useContext(AuthContext)



    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleSubmit = (evento) => {
        evento.preventDefault()

        const dados = {
            email, senha
        }


        console.log(dados)
        login(dados)

    }

    return (

        <section className="formulario">
            <form onSubmit={handleSubmit}>

                <TextField id="email" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField id="senha" label="Senha" variant="standard" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>

                <button type="submit">Autenticar</button>            
            </form>
        </section>
    )
}

export default Formulario