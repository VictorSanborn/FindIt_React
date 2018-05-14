import React, { Component } from 'react';
import LogInButton from '../component/LogInButton';
import ModalCloseButton from '../component/ModalCloseButton';
import { actionCreators } from '../../../common/redux/reducer';
import {loginUser} from '../../../common/functions/API';

const mapStateToProps = (state) => ({
  user: state.user,
  setLoginUser: state.setLoginUser,
  setLoginPassword: state.setLoginPassword,
});

class ModalFooter extends Component {


  onLogin = async(text) => {
    await loginUser(this.props.setLoginUser, this.props.setLoginPassword).then((response) => {
      console.log(response);
      console.log(this.props.setLoginUser);
      if (response.status == 200)
      {
        this.props.dispatch(actionCreators.setUserID(response.data.userID));
      }
      this.props.dispatch(actionCreators.removeLoginBoxData(''));
    });

  }

  removeLogInBoxDataFunction = () => {
    this.props.dispatch(actionCreators.removeLoginBoxData(''));
  }

  render() {
    return (
      <div class="modal-footer">
        <ModalCloseButton removeLoginData={this.removeLogInBoxDataFunction}/>
        <LogInButton onLogin={this.onLogin} name="Logga In" styleText="btn btn-primary"/>
      </div>   
    );
  }
}

export default ModalFooter;