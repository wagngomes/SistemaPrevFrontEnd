import { useState } from 'react'
import axios from 'axios'
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import DeleteForever from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { FaLaptopHouse } from 'react-icons/fa';

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
   

const ModalCalendario = ({ isOpen, onClose}) => {


    if (isOpen) {

        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <div style={CALENDAR_AREA}>
                        <Calendar
                            defaultView='year' />

                    </div>
                    <IconButton><CloseIcon /><p className='btnTxt'>Fechar</p></IconButton>
                    <IconButton><DeleteForever /><p className='btnTxt'>Deletar</p></IconButton>
                    <IconButton ><ForwardToInboxIcon/><p className='btnTxt'>Responder</p></IconButton>
                </div>
            </div>
        )
    }
    return null
}

export default ModalCalendario
