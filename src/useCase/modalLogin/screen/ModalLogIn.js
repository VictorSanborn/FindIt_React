import React, { Component } from 'react';
import ModalHeader from '../container/ModalHeader';
import ModalBody from '../container/ModalBody';
import ModalFooter from '../container/ModalFooter';
import { actionCreators } from '../../../common/redux/reducer';
import {loginUser} from '../../../common/functions/API';

class ModalLogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: '',
      SubmitMessage: '',
      ...this.state,
      Success: false,
      Error: false,
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
    

  loginUser = () => {
    if (this.state.usernameInput !== '' && this.state.passwordInput !== '')
    {
      console.log("test");
      loginUser(this.state.usernameInput, this.state.passwordInput).then((response) => {
        console.log(response);
        if (response.status == 200 &&  response.data.userID !== '0')
        {
          this.props.dispatch(actionCreators.setUserID(response.data.userID));
          this.props.dispatch(actionCreators.setUsername(this.state.usernameInput));
          this.setState({
            ...this.state,
            Success: true,
            Error: false,
            SubmitMessage: 'Login Sucessful!',
            usernameInput: '',
            passwordInput: '',

          })
          document.getElementsByName('closer')[0].click();
        }
      
        else
        {
          this.setState({
            ...this.state,
            Success: false,
            Error: true,
            SubmitMessage: 'Login failed',
          })
        }
       
    });
    }
    console.log(this.state.SubmitMessage);
  }

  
  render() {
    return (
      <div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">

            <div class="modal-content backgroundColor" style={{margin: 0}}>
            {this.state.Success ?
            <div class="col-xs-12 alert alert-success" style={{margin: 0}} role="alert">
              {this.state.SubmitMessage}
            </div>
            : this.state.Error ?
            <div class="col-xs-12 alert alert-danger" style={{margin: 0}} role="alert">
            {this.state.SubmitMessage}
          </div>
            :
            <div class="col-xs-12"></div>
            }

          {/*<div class="modal-content backgroundColor">*/}
            {/*<ModalHeader dispatch={this.props.dispatch} title={this.props.title}/>*/}
            <ModalHeader Success={this.state.Success} Error={this.state.Error} SubmitMessage={this.state.SubmitMessage} title={this.props.title}/>
            
            <ModalBody 
              dispatch={this.props.dispatch} 
              usernameInput={this.state.usernameInput} setUsername={this.onChangeUsername} 
              passwordInput={this.state.passwordInput} setLoginPassword={this.onChangePassword} 
            />
            <ModalFooter 
              usernameInput={this.state.usernameInput}
              passwordInput={this.state.passwordInput}
              OnLogin={this.loginUser}
              dispatch={this.props.dispatch} 
            />
            <button name="closer" hidden data-dismiss="modal"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogIn;
