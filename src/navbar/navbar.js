import './navbar.css'
import logo from '../assets/logo.png';

export function Navbar(){
    return(
        <div>
            
            <div className="navbar">
                <div></div>
                
                <h1 className='title'>Caithness Family Support Group</h1>
               
                <img src={logo} className='home-logo'/>
            </div>
        </div>
    )
}