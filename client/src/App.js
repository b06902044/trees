import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignedIn from './pages/SignedIn';
import Home from './pages/Home';
import UserContextProvider from './context/UserContext';
import './App.css';
import Contact from './pages/Contact';
import Activities from './pages/Activities';
import Reports from './pages/Reports';
import Data from './pages/Data';
import Friends from './pages/Friends';
import News from './pages/News';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserContextProvider>
          <Navbar />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/signedIn' component = {SignedIn} />
            <Route path = '/about' component = {About} />
            <Route path = '/activities' component = {Activities} />
            <Route path = '/reports' component = {Reports} />
            <Route path = '/data' component = {Data} />
            <Route path = '/friends' component = {Friends} />
            <Route path = '/news' component = {News} />
            <Route path = '/contact' component = {Contact} />
          </Switch>
        </UserContextProvider>    
      </div>
    </BrowserRouter>
  );
}

export default App;
