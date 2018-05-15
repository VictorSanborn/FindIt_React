import React, { Component } from 'react';
import ModalHeader from '../container/ModalHeader';
import ModalBody from '../container/ModalBody';
import ModalFooter from '../container/ModalFooter';
import {signupUser} from '../../../common/functions/API';
class ModalSignup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UsernameInput: '',
      PasswordInput: '',
      FNameInput: '',
      LNameInput: '',
      EmailInput: '',
      Success: false,
      Error: false,
      SubmitMessage: '',
    }
  }; 

  onChangeUsername = (username) =>{
    this.setState({
        ...this.state,
        UsernameInput: username.target.value,
      })
  };

  onChangePassword = (password) =>{
    this.setState({
        ...this.state,
        PasswordInput: password.target.value,
      })
  };

  onChangeFName = (FName) =>{
    this.setState({
        ...this.state,
        FNameInput: FName.target.value,
      })
  };

  onChangeLName = (LName) =>{
    this.setState({
        ...this.state,
        LNameInput: LName.target.value,
      })
  };

  onChangeEmail = (Email) =>{
    this.setState({
        ...this.state,
        EmailInput: Email.target.value,
      })
  };


  OnCreateUserSubmit = () => {
    if (this.state.UsernameInput !== '' && this.state.PasswordInput !== '' && this.state.FNameInput !== '' && this.state.LNameInput !== '' && this.state.EmailInput !== '')
    {
      signupUser(this.state.UsernameInput, this.state.PasswordInput, this.state.FNameInput, this.state.LNameInput, this.state.EmailInput).then((response) => {
        console.log(response);
        if (response.status == 200)
        {
          this.setState({
            ...this.state,
            Success: true,
            Error: false,
            SubmitMessage: 'User creation successful!',
            UsernameInput: '',
            PasswordInput: '',
            FNameInput: '',
            LNameInput: '',
            EmailInput: '',
          })
        }
        else
        {
          this.setState({
            ...this.state,
            Success: false,
            Error: true,
            SubmitMessage: 'User creation failed',
          })
        }
    });
    }
  }

  render() {
    return (
      <div class="modal fade" id="SignupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

            <ModalHeader Success={this.state.Success} Error={this.state.Error} SubmitMessage={this.state.SubmitMessage} title={this.props.title}/>
            <ModalBody 
              UsernameInput={this.state.UsernameInput} onChangeUsername={this.onChangeUsername}
              PasswordInput={this.state.PasswordInput} onChangePassword={this.onChangePassword}
              FNameInput={this.state.FNameInput} onChangeFName={this.onChangeFName}
              LNameInput={this.state.LNameInput} onChangeLName={this.onChangeLName}
              EmailInput={this.state.EmailInput} onChangeEmail={this.onChangeEmail}
            />
            <ModalFooter OnCreateUserSubmit={this.OnCreateUserSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalSignup;
