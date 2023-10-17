import './Previsao.css'
import { FaSistrix, FaUserAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import NoteCard from '../../componentes/Card/NoteCard'

const Previsao = () => {
    const [dadosCard, setDadosCard] = useState([])


    useEffect(() => {
        buscaRequisicoes()
    }, [])

    async function buscaRequisicoes() {

        const email = localStorage.getItem('email')
        const _token = localStorage.getItem('token')
        var solicitante_email = email.replace(/^"(.*)"$/,'$1')
        try {
            const todasAsRequisicoesEmAberto = await fetch(`http://localhost:5000/previsoes/${solicitante_email}`, {
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

    return(

        <div className="previsao">

            <header>

                <input type="text" id="busca" placeholder="   Buscar"></input>
                <div className='espaco'>
                </div>
                <FaUserAlt color='#007cbc' className='usuarioIcon' />
                <p></p>
            </header>
            <section>
                <h3>Área de previsões</h3>
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

        </div>
    )


}

export default Previsao