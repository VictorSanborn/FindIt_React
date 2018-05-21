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
  cookies: state.cookies,
});

class App extends Component {
  state = {};
  
  removeCookies = () => {
    this.props.dispatch(actionCreators.setCookies(true));
  }

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
                  <a class="nav linkColor mr-5" href="/">Hem <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav linkColor mr-5" href="/event">Evenemang</a>
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
          {
            this.props.cookies === false ? 
            <div class="alert alert-warning" role="alert" style={{borderRadius: 0, padding:50, margin: 0}}>
              <div>
                Vi använder oss av Cookies för att hålla dig inloggad och spara värdern temporärt <i class="h1 far fa-heart"></i>
              </div>
              <a href={this.props.link} class="btn btn-outline-light" style={{margin: '12px'}} onClick={() => {this.removeCookies()}}>Skål!</a>
            </div>
            :
            <div></div>
          }
          
            
          <div class="col-sm-8 offset-sm-2 contentPadding" style={{backgroundColor: 'white', minHeight: '80vh'}}>
            { /*Lägg till alla sidor som skall kunna navigeras ifrån!*/ }
            <Route exact path="/" component={Search}/>
            <Route path="/event" component={Event}/>
            <Route path="/products" component={Products}/>
            <Route path="/business/:barId" render={(props) => <Business {...props} userID={this.props.userID} />} />
          </div> 
          <ModalLogIn dispatch={this.props.dispatch} title="Logga In"/>
          <ModalSignup title="Bli medlem"/>
          <Footer/>
        </div>  
    );
  }
}

export default withRouter(connect(mapStateToProps)(App))
