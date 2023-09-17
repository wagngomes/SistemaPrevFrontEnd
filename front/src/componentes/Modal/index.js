import CampoTextoMedio from "../CampoTextoMedio"

import './Modal.css'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '25%',
    padding: '20px',
    backgroundColor: ' #f1f6fc',
    borderRadius: '8px'

}




const Modal = ({ isOpen }) => {

    if (isOpen) {

        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <h3>Cadastro de novo usuário</h3>
                    <form>
                        <CampoTextoMedio label="Nome" placeholder="digite seu nome" type="text" />
                        <CampoTextoMedio label="Email" placeholder="seuemail@viveo.com.br" type="text" />
                        <CampoTextoMedio label="Senha" placeholder="Digite sua senha" type="password" />
                        <button type="submit" onClick={() => !isOpen} id="btnCadastro">Cadastrar</button>
                    </form>
                </div>
            </div>
        )
    }
    return null
}

export default Modal
