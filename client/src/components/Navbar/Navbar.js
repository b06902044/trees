import React , { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const {auth, username, userPhoto, signOut } = useContext(UserContext);

    useEffect(() => {
        console.log("nav", auth, username, userPhoto, signOut);
    })

    return(
      <IconContext.Provider value = {{color: '#fff'}}>  
        <div className="navbar">
            <NavLink to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </NavLink>
            <div>logo</div>
            {auth ?     <div className = "userIn">
                            <div>username : {username}</div>
                            <button onClick = {signOut}>Sign Out</button> 
                        </div> 
                        :
                        <div> 
                            <NavLink to = '/signedIn'><button>Sign In</button></NavLink>
                        </div>
            }
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <NavLink to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </NavLink>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <NavLink to={item.path}>
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </IconContext.Provider>
    );
}

export default Navbar;