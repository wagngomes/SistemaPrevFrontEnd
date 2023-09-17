import CampoTextoMedio from "../CampoTextoMedio"
import CampoTextoPequeno from "../CampoTextoPequeno"
import CampoSelect from "../CampoSelect"
import "./ModalRequisicao.css"

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
    width: '40%',
    padding: '20px',
    backgroundColor: ' #f1f6fc',
    borderRadius: '8px'

}




const ModalRequisicao = ({ isOpen }) => {

    if (isOpen) {

        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <h3>requisição</h3>
                    <form>
                        <CampoTextoPequeno label="Código" placeholder="-" type="text" />
                        <CampoTextoMedio label="Descrição" placeholder="-" type="text" />
                        <CampoTextoMedio label="Fornecedor" placeholder="-" type="text" />
                        <CampoTextoMedio label="Supridor" placeholder="-" type="text" />
                        <CampoTextoMedio label="Quantidade" placeholder="-" type="number" />
                        <CampoTextoMedio label="Observação" placeholder="Escreva aqui algum detalhe referente a solicitação" type="text" />
                        <div className="select">
                            <CampoSelect label="Origem" />
                            <CampoSelect label="Destino" />

                        </div>

                        <button type="submit" onClick={() => !isOpen} id="btnCadastro">Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
    return null
}

export default ModalRequisicao
