import { useState } from 'react';
import {FaBars} from 'react-icons/fa'
import Sidebar from './Sidebar';
// import Sidebarfile from './Sidebarfile'
const Header = ({setCategory}) => {
    
    const [show, setShow] = useState(false);
    

    const showComp = () => {
        setShow(!show)
    }
    
    return (
        <>
            {show && <Sidebar setCategory={ setCategory} />}
            <div className="header">
                <div className="navbar">
                    <FaBars onClick={showComp} />
                
                </div>
                <div className="logo">
                    <img src="https://play-lh.googleusercontent.com/hd-zjb0kvaVWufm0SEsant8zt0-HS_0tUMv79m2onY_wpkdrAArYV8oZ0vQPiMolpPIa" alt=""  />
                   <span className='shorts'>inshorts</span> 
                </div>
                   
            </div>
            
           
           
        </>
    )
}
export default Header;