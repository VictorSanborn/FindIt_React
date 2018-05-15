import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import './App.css';
import './common/style/CommonStyle.css';
import { actionCreators } from './common/redux/reducer';
import { connect } from 'react-redux';
import Index from './useCase/index/screen/Index';
import Reklam from './common/reklam/screen/Reklam';
import Footer from './common/footer/screen/Footer';
import ModalLogIn from './useCase/modalLogin/screen/ModalLogIn';
import Search from './useCase/search/screen/Search';
import Business from './useCase/business/screen/Business';
import Event from './useCase/event/screen/Event';
import ReduxTest from './useCase/reduxTester/screen/ReduxTest';
import ModalSignup from './useCase/modalsignup/screen/ModalSignup';

const mapStateToProps = (state) => ({
  userID: state.userID,
  setLoginUser: state.setLoginUser,
  setLoginPassword: state.setLoginPassword,
  setUsername: state.setUsername,
});

class App extends Component {
  state = {};
  

  render() {
    return (
        <div className="App">
          <header className="App-header">          
            <nav class="navbar navbar-expand-lg">
              <h1 class="navbar-brand App-title" href="#">Find It</h1>
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
                     <a class="nav-link linkColor" href="/ReduxTest">Redux Test</a>
                  </li>
                  <li class="nav-items">
                    <a class="nav-link linkColor" href="/event">Event</a>
                  </li>
                  <li class="nav-items">
                    <a class="nav-link linkColor" href="/business">Bar</a>
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
               { this.props.setUsername === "" ? 
                  <form class="form-inline my-2 my-lg-0 row">
                    <button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#LoginModal">Logga In</button>
                    <button type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#SignupModal">Bli Medlem</button>
                  </form>
                 : 
                 <form class="form-inline my-2 my-lg-0 row">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle linkColor" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Välkommen {this.props.setUsername}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" onClick={()=>{this.props.dispatch(actionCreators.logoutUser(''));}} href="#">Logga Ut</a>
                        </div>
                      </li>
                    </ul>
                  </form>
                }
                
              </div>
            </nav>
          </header>
            
          <div class="col-sm-8 offset-sm-2 contentPadding" style={{backgroundColor: 'white', minHeight: '80vh'}}>
            { /*Lägg till alla sidor som skall kunna navigeras ifrån!*/ }
            <Route exact path="/" component={Index}/>
            <Route path="/search" component={Search}/>
            <Route path="/reklam" component={Reklam}/>
            <Route path="/event" component={Event}/>
            <Route path="/business/:barId" component={Business}/>
            <Route path="/ReduxTest" render={() => <ReduxTest user={this.props.userID} dispatch={this.props.dispatch}/>}  />
          </div> 
          <ModalLogIn setLoginUser={this.props.setLoginUser} setLoginPassword={this.props.setLoginPassword} dispatch={this.props.dispatch} title="Logga In"/>
          <ModalSignup title="Bli medlem"/>

          <Footer/>
        </div>
      
    );
  }
}

export default withRouter(connect(mapStateToProps)(App))
