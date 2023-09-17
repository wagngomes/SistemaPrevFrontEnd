import './CampoSelect.css'
const CentroSelect = (props) => {

    return(
        <div className="select">

            <label>{props.label}</label>        
            <select>
                <option value="1001">Mafra - RIB</option>
                <option value="1002">Mafra - LDA</option> 
                <option value="1003">Mafra - CTL</option> 
                <option value="1009">Mafra - BRA</option>  
                <option value="1010">Mafra - REC</option>
                <option value="1021">Mafra - NSR</option>           
            </select>
        </div>
    )
}

export default CentroSelect