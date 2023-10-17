import './Dashboard.css'

import { Chart } from "react-google-charts";

import Calendario from '../../componentes/Calendario/Calendario';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'


const Dashboard = () => {

    const data = [
        ["Analista", "Solicitações", { role: "style" }],
        ["ícaro", 10, "#b87333"], // RGB value
        ["Raquel", 2, "silver"], // English color name
        ["Marcelo", 4, "gold"],
        ["Tiago", 8, "color: #e5e4e2"], // CSS-style declaration
        ["Gilberto", 7, "b87338"],
        ["Ana", 12, "b89333"],
      ];

    return(
    
        <div className='dashboard'>


            <h1>DASHBOARD</h1>
            <Calendar/>


            <Chart chartType="ColumnChart" width="94%" height="400px"  margin-top="40px" data={data} />



        

    
        </div>
    )


}

export default Dashboard