import './Previsao.css'
import { FaSistrix, FaUserAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import NoteCard from '../../componentes/Card/NoteCard'
import { Pagination } from '@mui/material'
import { Box, CssBaseline, Container }from '@mui/material'

const Previsao = () => {
    const [dadosCard, setDadosCard] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const cardsPerPage = 6

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
        // Execute ação de buscar dados com a nova página
    };


    useEffect(() => {
        buscaRequisicoes()
    }, [page])

    async function buscaRequisicoes() {

        const email = localStorage.getItem('email')
        const _token = localStorage.getItem('token')
        var solicitante_email = email.replace(/^"(.*)"$/,'$1')
        try {
            const todasAsRequisicoesEmAberto = await fetch(`http://localhost:5000/previsoes/${solicitante_email}?page=${page}&limit=${cardsPerPage}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${_token}`
                }
            })
            const dadosConvertidos = await todasAsRequisicoesEmAberto.json()
            const totalPageCount = dadosConvertidos.count

            setDadosCard(dadosConvertidos.rows)
            setPage(page);
            setTotalPages(totalPageCount)
            console.log(dadosConvertidos)
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

            <Box display="flex" justifyContent="center">
            <Pagination 
                    count={totalPages}
                    defaultPage={page}
                    onChange={handlePageChange}
                    size='small'
                />
            </Box>
        </div>
    )


}

export default Previsao