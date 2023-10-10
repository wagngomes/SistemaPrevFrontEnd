import './Planejador.css'
import { FaSistrix, FaUserAlt } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import ModalRequisicao from '../../componentes/ModalRequisicao'
import DataTable from 'react-data-table-component'


const Planejador = () => {

    const [openModalRequisicao, setOpenModalRequisicao] = useState(false)
    const [dadosCard, setDadosCard] = useState([])

    useEffect(() => {
        buscaRequisicoes()
    }, [])

    async function buscaRequisicoes() {

        const userPlan = localStorage.getItem('usuario')
        var planejador = userPlan.replace(/^"(.*)"$/,'$1')
        const _token = localStorage.getItem('token')
    
        try {
            const todasAsRequisicoesEmAberto = await fetch(`http://localhost:5000/requisicao/${planejador}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${_token}`
                }
            })
            const dadosConvertidos = await todasAsRequisicoesEmAberto.json()
            var cod = dadosConvertidos[0].codigo
            console.log(cod)
            console.log(dadosConvertidos)
            setDadosCard(dadosConvertidos)
        } catch (erro) {
            console.log(erro)
            alert(erro)
        }
    }

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
            selectableRowsHighlight: true,
            width: '120px'
        },
        {
            name: 'codigo',
            selector: row => row.codigo,
            width: '160px'
        },
        {
            name: 'descricao',
            selector: row => row.descricao,
            width: '320px'
        },
        {
            name: 'fornecedor',
            selector: row => row.fornecedor,
        },
        {
            name: 'quantidade',
            selector: row => row.quantidade,
            width: '120px'
        },
        {
            name: 'destino',
            selector: row => row.destino,
        },


    ]

    return (
            <div className='planejador'>
                <header>
                    <FaSistrix />
                    <input type="text" id="busca" placeholder="   Buscar"></input>
                    <div className='espaco'>
                    </div>
                    <FaUserAlt color='#007cbc' />
                </header>

                <section>
                    <h3>Área do planejador</h3>
                    <button onClick={() => setOpenModalRequisicao(true)}>Novo</button>
                </section>

                <main>
                    <DataTable 
                    columns={columns}
                    data={dadosCard}
                    highlightOnHover={true}
                    />
                </main>
                <div>
                    <ModalRequisicao isOpen={openModalRequisicao} />
                </div>
            </div>

    )
}
export default Planejador