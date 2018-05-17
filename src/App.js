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
import Products from './useCase/products/screen/Products';

const mapStateToProps = (state) => ({
  userID: state.userID,
  setUsername: state.setUsername,
});

class App extends Component {
  state = {};
  

  render() {
    return (
        <div className="App">
          <header className="App-header">          
             <nav class="navbar navbar-expand-lg navbar-light App-header">
            <h1 class="App-title mr-5">Find It</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon linkColor"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav linkColor mr-5" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav linkColor mr-5" href="/reklam">Reklam</a>
                </li>
                <li class="nav-item">
                  <a class="nav linkColor mr-5" href="/ReduxTest">Redux test</a>
                </li>
                <li class="nav-item">
                  <a class="nav linkColor mr-5" href="/event">Event</a>
                </li>
                <li class="nav-item">
                  <a class="nav linkColor mr-5" href="/business">Bar</a>
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
                          <span class="linkColor">Välkommen {this.props.setUsername}</span>
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
            <Route exact path="/" component={Search}/>
            <Route path="/reklam" component={Reklam}/>
            <Route path="/event" component={Event}/>
            <Route path="/products" component={Products}/>
            <Route path="/business/:barId" render={(props) => <Business {...props} userID={this.props.userID} />} />
            <Route path="/ReduxTest" render={() => <ReduxTest user={this.props.userID} dispatch={this.props.dispatch}/>}  />
          </div> 
          <ModalLogIn dispatch={this.props.dispatch} title="Logga In"/>
          <ModalSignup title="Bli medlem"/>
          <Footer/>
        </div>  
    );
  }
}

export default withRouter(connect(mapStateToProps)(App))
