import { useState } from 'react'
import axios from 'axios'
import './Calendario.css'

import 'react-calendar/dist/Calendar.css';
import DeleteForever from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 


const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '40%',
    padding: '20px',
    backgroundColor: ' #f1f6fc',
    borderRadius: '8px',
    opacity: '0.99'
}

const CALENDAR_AREA = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
   }

const ICONS_AREA = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
   }
   

const ModalCalendario = ({ isOpen, onClose, requisicaoInfo }) => {

    const [date, setDate] = useState(null);

    const responderRequisicao = async () => {  

        const _token = localStorage.getItem('token')

        try{
            const dadosEmail = await axios.post('http://localhost:5000/mailSend', {

                "destinatarioNone": requisicaoInfo[0].solicitante_nome,
                "destinatarioEmail": "wagner.gomes.cx2@gmail.com",
                "dataPrometida": date,
                "codigo": requisicaoInfo[0].codigo,
                "desricao": requisicaoInfo[0].descricao
            }, {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${_token}`
                },
            })

            console.log(date)

        }catch(error){
            console.log('erro ao fazr a requisição', error)

        }

    }
 


    if (isOpen) {

        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>

                    <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy"/>


                    <p className='reqDados'>{requisicaoInfo[0].solicitante_email || "N/A"}</p>
                    <p className='reqDados'>{requisicaoInfo[0].solicitante_nome || "N/A"}</p>
                    <p className='reqDados'>{requisicaoInfo[0].createdAt || "N/A"}</p>
                    <p className='reqDados'>{requisicaoInfo[0].obs || "N/A"}</p>


                    <div style={ICONS_AREA} >

                        <IconButton className='iconBtn' onClick={onClose}><CloseIcon /><p className='btnTxt'>Fechar</p></IconButton>
                        <IconButton className='iconBtn'><DeleteForever /><p className='btnTxt'>Deletar</p></IconButton>
                        <IconButton className='iconBtn' onClick={responderRequisicao}><ForwardToInboxIcon /><p className='btnTxt'>Responder</p></IconButton>
                    </div>


                </div>
            </div>
        )
    }
    return null
}

export default ModalCalendario
