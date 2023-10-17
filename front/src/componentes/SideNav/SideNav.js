import { NavLink } from 'react-router-dom'
import './SideNav.css'
import { FaBars, FaCalendarAlt, FaChartBar, FaShippingFast, FaAddressCard, FaListOl, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';


const MySideNav = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    const menuItem = [
        {
            path: "/Solicitacao",
            name: "Solicitações",
            icon: <AssignmentLateIcon />
        },
        {
            path: "/Transferencia",
            name: "Transferência",
            icon: <FaShippingFast />
        },
        {
            path: "/Previsao",
            name: "Previsao",
            icon: <FaCalendarAlt />
        },
        {
            path: "/Dashboard",
            name: "Dashboard",
            icon: <FaChartBar />
        },
        {
            path: "/Planejador",
            name: "Planejador",
            icon: <FaAddressCard />
        },
        {
            path: "/",
            name: "Sair",
            icon: <FaExternalLinkAlt />
        }
    ]
    return (
        <div className='container'>
            <div style={{ width: isOpen ? "280px" : "65px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "65px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )
}
export default MySideNav