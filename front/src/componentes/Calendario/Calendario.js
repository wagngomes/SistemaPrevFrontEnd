import { useState } from 'react'
import axios from 'axios'
import Calendar from "react-calendar"
//import 'react-calendar/dist/Calendar.css';
import './Calendario.css'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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

const ModalCalendario = ({ isOpen, onClose}) => {  
    

    if (isOpen) {

        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                    <Calendar
                    defaultView='year' />
                </div>
            </div>
        )
    }
    return null
}

export default ModalCalendario
