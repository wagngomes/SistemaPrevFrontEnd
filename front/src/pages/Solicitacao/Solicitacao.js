import './Solicitacao.css'
import { FaSistrix, FaUserAlt } from 'react-icons/fa'
import ModalRequisicao from '../../componentes/ModalRequisicao'
import { useState } from 'react'



const Solicitacoes = () => {
    const [openModalRequisicao, setOpenModalRequisicao] = useState(false)
   

    const abrirModal = () => {

        setOpenModalRequisicao(true)
    }
    const fecharModal = () => {

        setOpenModalRequisicao(false)
        window.location.reload()

    }

  return(

      <div className="solicitacao">
          <header>
              <input type="text" id="busca" placeholder="   Buscar"></input>
              <div className='espaco'>
              </div>
              <FaUserAlt color='#007cbc' className='usuarioIcon' />
              <p></p>
          </header>
          <section>
              <h3>Área de solicitações</h3>
              <button onClick={() => setOpenModalRequisicao(true)}>Nova solicitação</button>
          </section>
          <main>

          </main>
          <div>
                <ModalRequisicao isOpen={openModalRequisicao} onClose={fecharModal} />
            </div>
      </div>
  )


}

export default Solicitacoes