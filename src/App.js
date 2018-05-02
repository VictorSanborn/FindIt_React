import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import './common/style/CommonStyle.css';
import Index from './useCase/index/screen/Index';
import Reklam from './useCase/reklam/screen/Reklam';
import Footer from './useCase/footer/screen/Footer';
import LogIn from './useCase/logIn/screen/LogIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">           
            <nav class="navbar navbar-expand-lg">
              <h1 class="navbar-brand App-title" href="#">View It</h1>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link linkColor" href="/">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link linkColor" href="/reklam">Reklam</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link linkColor" href="/logIn">LogIn</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle linkColor" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link linkColor disabled" href="#">Disabled</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
            
          <div class="col-sm-8 offset-sm-2" style={{backgroundColor: 'white', minHeight: '80vh'}}>
            { /*Lägg till alla sidor som skall kunna navigeras ifrån!*/ }
            <Route exact path="/" component={Index}/>
            <Route path="/search" component={Search}/>
            <Route path="/reklam" component={Reklam}/>
            <Route path="/logIn" component={LogIn}/>
          </div> 

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
