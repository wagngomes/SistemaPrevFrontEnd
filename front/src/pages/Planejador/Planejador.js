import './Planejador.css'
import { FaSistrix, FaUserAlt } from 'react-icons/fa'
import { useState } from 'react'
import ModalRequisicao from '../../componentes/ModalRequisicao'


const Planejador = () => {

    const [openModalRequisicao, setOpenModalRequisicao] = useState(false)

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
                </main>
                <div>
                    <ModalRequisicao isOpen={openModalRequisicao} />
                </div>
            </div>

    )
}
export default Planejador