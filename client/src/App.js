import React, { Component, useState , useEffect } from 'react';
import './App.css';
import axios from 'axios'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
  apiKey: "AIzaSyBDwcbLqFnlmWZEsF9B1HqFgYeW_5a-ft0",
  authDomain: "trees-96888.firebaseapp.com"
})

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {auth: false};
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({auth: !!user});
      console.log("user", user);
    })
  }
  
  render(){
    return(
      <div className="App">
        {this.state.auth ? (
          <span>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }

}

export default App;
