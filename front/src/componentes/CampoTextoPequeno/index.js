import './CampoTextoPequeno.css'
const CampoTextoPequeno = (props) => {

    return (
        <div className="CampoTextoPequeno">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type={props.type}/>

        </div>
    )
}

export default CampoTextoPequeno