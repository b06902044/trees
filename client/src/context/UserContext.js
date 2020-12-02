import React, {createContext} from 'react';
import firebase from 'firebase';
import {withRouter} from 'react-router-dom';

export const UserContext = createContext();

firebase.initializeApp({
    apiKey: "AIzaSyBDwcbLqFnlmWZEsF9B1HqFgYeW_5a-ft0",
    authDomain: "trees-96888.firebaseapp.com"
})

class UserContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            auth: false,
            username: "",
            userPhoto: ""
        };
    }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => {
                console.log("success");
                this.props.history.push('/');
            }
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({
              auth: !!user,
              username: (user)? user.displayName : "",
              userPhoto: (user && user.photoURL)?   user.photoURL : ""
            });
          console.log("user", user);
        })
      }
    
    signOut = () => {
        firebase.auth().signOut();
        this.props.history.push('/');
    }
    
    render() {
        return (
            <UserContext.Provider value = {{...this.state, signOut: this.signOut, uiConfig: this.uiConfig}}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
 
export default withRouter(UserContextProvider);