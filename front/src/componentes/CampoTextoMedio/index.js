import './CampoTextoMedio.css'
const CampoTextoMedio = (props) => {

    return (
        <div className="CampoTexto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type={props.type}/>

        </div>
    )
}

export default CampoTextoMedio