import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './common/resource/logo.svg';
import './App.css';
import Index from './useCase/index/screen/Index';
import Reklam from './useCase/reklam/screen/Reklam';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>

          <ul style={{listStyle: 'none'}}>
            <li>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/reklam">Reklam</Link>&nbsp;
            </li>
          </ul>
          </header>
            
            <div>
              { /*Lägg till alla sidor som skall kunna navigeras ifrån!*/ }
              <Route exact path="/" component={Index}/>
              <Route path="/reklam" component={Reklam}/>
            </div>  
        </div>
      </Router>
    );
  }
}

export default App;
