import React , { useContext } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const SignedIn = () => {
    const data = useContext(UserContext);
    console.log("signin" , data);
  
    return(
        <React.Fragment>
            {<StyledFirebaseAuth uiConfig={data.uiConfig} firebaseAuth={firebase.auth()}/>}
        </React.Fragment> 
    )
}

export default SignedIn;