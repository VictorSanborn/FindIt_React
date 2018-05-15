import React, { Component } from 'react';
import ModalHeader from '../container/ModalHeader';
import ModalBody from '../container/ModalBody';
import ModalFooter from '../container/ModalFooter';

class ModalLogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: 'hej',
      passwordInput: 'hopp',
    }
  }; 

  onChangeUsername = (username) =>{
    this.setState({
        ...this.state,
        usernameInput: username.target.value,
      })
  };

  onChangePassword = (password) =>{
    this.setState({
        ...this.state,
        passwordInput: password.target.value,
      })
  };

  render() {
    return (
      <div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content backgroundColor">
            <ModalHeader dispatch={this.props.dispatch} title={this.props.title}/>
            <ModalBody 
              dispatch={this.props.dispatch} 
              setUsername={this.onChangeUsername} 
              setLoginPassword={this.onChangePassword} 
            />
            <ModalFooter 
              setLoginUser={this.props.setLoginUser} 
              dispatch={this.props.dispatch} 
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogIn;
