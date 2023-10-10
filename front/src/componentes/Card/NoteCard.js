import './NoteCard.css'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import InventoryIcon from '@mui/icons-material/Inventory';
const NoteCard = (props) => {

    return (
        <div className='card-box-shadow'>


                    <h4 className='codigoItem'>{props.codigo}</h4>

                    <LocationOnIcon  style={{color: '#0466c8', fontsize:'small'}}/>
                    <h4>{props.destino}</h4>



            <h6 className='descricoItem'>{props.descricao}</h6>

            <div className='content'>

                <p className='qtd'>{props.quantidade} unidades</p>
                <AccountBoxIcon  style={{color: '#0466c8'}}/>
                <p>{props.planejador}</p>
            </div>

            <div className='action'>
                <QrCode2Icon />
                <p className='id'>{props.id}</p>
                <IconButton edge={'start'}><EditIcon/><p className='btnTxt'>Editar</p></IconButton>

                <IconButton><DeleteForever /><p className='btnTxt'>deletar</p></IconButton>

            </div>


        </div>

    )



}

export default NoteCard