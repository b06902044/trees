import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignedIn from './components/SignedIn';
import Home from './components/Home';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserContextProvider>
          <Navbar />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/signedIn' component = {SignedIn} />
          </Switch>
        </UserContextProvider>    
      </div>
    </BrowserRouter>
  );
}

export default App;
