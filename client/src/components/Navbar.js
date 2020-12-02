import React , { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
    const {auth, username, userPhoto, signOut } = useContext(UserContext);
    useEffect(() => {
        console.log("nav", auth, username, userPhoto, signOut);
    })

    return(
      <div className="Navbar">
        <h3>數殺社</h3>
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
    );
}

export default Navbar;