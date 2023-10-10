import "./ModalRequisicao.css"
import { useState } from 'react'
import axios from 'axios'

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

const ModalRequisicao = ({ isOpen, onClose}) => {  
    
    const solicitante = localStorage.getItem('usuario')
    const emailSolicita = localStorage.getItem('email')
    const solicitanteID = localStorage.getItem('id')
    var solicitante_nome = solicitante.replace(/^"(.*)"$/,'$1')
    var solicitante_email = emailSolicita.replace(/^"(.*)"$/,'$1')

    const [codigo, setCodigo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [fornecedor, setFornecedor] = useState("")
    const [planejador, setPlanejador] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [destino, setDestino] = useState("")
    const [tipo, setTipo] = useState("")
    const [obs, setObs] = useState("")


    const dados = {
        codigo,
        descricao,
        fornecedor,
        planejador,
        quantidade,
        destino,
        solicitante_nome,
        solicitante_email,
        tipo,
        obs,
        solicitanteID
    }


    async function pegaDadosDoProduto() {

        const _token = localStorage.getItem('token')
    

        try{
            var consultaDados = await fetch(`http://localhost:5000/produto/${codigo}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${_token}`
                }
            })   
            var dadosConvertidos = await consultaDados.json()
            setDescricao(dadosConvertidos.descricao)
            setFornecedor(dadosConvertidos.Fornecedore.descricao)
            setPlanejador(dadosConvertidos.Fornecedore.Usuario.nome)
            if (dadosConvertidos.erro) {
                throw Error("Código não cdastrado")
            }
        }catch (erro) {
            console.log(erro)
            alert(erro)
        }



    }
    const handleSubmit = async (event) => { 
        event.preventDefault()  

        const _token = localStorage.getItem('token')

        try{
            const response = await axios.post('http://localhost:5000/requisicoes', {

            "codigo": dados.codigo,
            "descricao": dados.descricao,
            "fornecedor": dados.fornecedor,
            "planejador": dados.planejador,
            "quantidade": parseInt(dados.quantidade),
            "destino": dados.destino,
            "solicitante_nome": dados.solicitante_nome,
            "solicitante_email": dados.solicitante_email,
            "tipo": dados.tipo,
            "obs": dados.obs,
           
           

            }, {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${_token}`
                },
            })
            console.log(response.data)
            console.log(dados)


        }catch(error){
            console.log('erro ao fazr a requisição', error)

        }

        console.log(dados)

        setCodigo("")
        setDescricao("")
        setFornecedor("")
        setPlanejador("")
        setQuantidade("")
        setDestino("")
        setTipo("")
        setObs("")
        onClose()

    }

    if (isOpen) {

        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <h3>Requisição</h3>
                    <form onSubmit={handleSubmit}>


                        <label>Código:</label>
                        <input type="text" id="codigo" value={codigo} onBlur={pegaDadosDoProduto} onChange={(e) => setCodigo(e.target.value)}></input>

                        <label>Descrição:</label>
                        <input type="text" id="descicao" value={descricao} onChange={(e) => setDescricao(e.target.value)} ></input>

                        <label>Fornecedor:</label>
                        <input type="text" id="fornecedor" value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} ></input>

                        <label>Responsável:</label>
                        <input type="text" id="planejador" value={planejador} onChange={(e) => setPlanejador(e.target.value)}></input>

                        <label>Quantidade:</label>
                        <input type="text" id="quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}></input>

                        <label>Destino:</label>
                        <select value={destino} onChange={(e) => setDestino(e.target.value)}>
                            <option value="00"></option>
                            <option value="1001">Mafra - RIB</option>
                            <option value="1002">Mafra - LDA</option>
                            <option value="1003">Mafra - CTL</option>
                            <option value="1009">Mafra - BRA</option>
                            <option value="1010">Mafra - REC</option>
                            <option value="1021">Mafra - NSR</option>
                        </select>
                        <label>Tipo:</label>
                        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="000"></option>
                            <option value="previsao">Previsão</option>
                            <option value="transferencia">Transferência</option>
                        </select>

                        <label>Observação:</label>
                        <input type="text" id="obs" value={obs} onChange={(e) => setObs(e.target.value)}></input>
                        <label></label>
                        <div className="handler">

                        <button type="submit">Enviar</button>

                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
    return null
}

export default ModalRequisicao
