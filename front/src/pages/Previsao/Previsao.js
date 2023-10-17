import './Previsao.css'
import { FaSistrix, FaUserAlt } from 'react-icons/fa'

const Previsao = () => {

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

            </main>

        </div>
    )


}

export default Previsao