import './Transferencia.css'
import { FaSistrix, FaUserAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import ModalRequisicao from '../../componentes/ModalRequisicao'
import { useContext } from 'react'
import { AuthProvider } from '../../contexts/auth'
import NoteCard from '../../componentes/Card/NoteCard'
import { Experimental_CssVarsProvider, Grid } from '@mui/material'

const Transferencia = () => {
    const [openModalRequisicao, setOpenModalRequisicao] = useState(false)
    const [dadosCard, setDadosCard] = useState([])

    const abrirModal = () => {

        setOpenModalRequisicao(true)
    }
    const fecharModal = () => {

        setOpenModalRequisicao(false)
        window.location.reload()

    }

    useEffect(() => {
        buscaRequisicoes()
    }, [])

    async function buscaRequisicoes() {

        const email = localStorage.getItem('email')
        const _token = localStorage.getItem('token')
        var solicitante_email = email.replace(/^"(.*)"$/,'$1')
        try {
            const todasAsRequisicoesEmAberto = await fetch(`http://localhost:5000/requisicoes/${solicitante_email}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${_token}`
                }
            })
            const dadosConvertidos = await todasAsRequisicoesEmAberto.json()
            var cod = dadosConvertidos[0].codigo

            setDadosCard(dadosConvertidos)
        } catch (erro) {
            
        }
    }
    return (

        <div className='transferencia'>
            <header>
                <input type="text" id="busca" placeholder="   Buscar"></input>
                <div className='espaco'>
                </div>
                <FaUserAlt color='#007cbc' className='usuarioIcon'/>
                <p></p>
            </header>

            <section>
                <h3>Área de transferências</h3>
                <button onClick={() => setOpenModalRequisicao(true)}>Novo</button>
            </section>
            <main>
                {dadosCard.map((dadosReq, index) => (
                    <NoteCard
                    key={index}
                    codigo={dadosCard[index].codigo}
                    destino={dadosCard[index].destino}
                    descricao={dadosCard[index].descricao}
                    quantidade={dadosCard[index].quantidade}
                    planejador={dadosCard[index].planejador}
                    id={dadosCard[index].id}
                  />
                  
                ))}

            </main>
            <div>
                <ModalRequisicao isOpen={openModalRequisicao} onClose={fecharModal} />
            </div>

        </div>

    )



}

export default Transferencia