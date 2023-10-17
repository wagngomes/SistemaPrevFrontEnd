import './Solicitacao.css'
import { FaSistrix, FaUserAlt } from 'react-icons/fa'
const Solicitacoes = () => {

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
          </section>
          <main>

          </main>
      </div>
  )


}

export default Solicitacoes