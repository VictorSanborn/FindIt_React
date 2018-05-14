import React, { Component } from 'react';
import InputWithLable from '../container/InputWithLable';
import { actionCreators } from '../../../common/redux/reducer';

class ModalBody extends Component {
  onInputNameChanged = (text) => {
    this.props.dispatch(actionCreators.setLoginUser(text.target.value));
  }

  onInputPasswordChanged = (text) => {
    this.props.dispatch(actionCreators.setLoginPassword(text.target.value));
  }

  render() {

    return (
      <div class="modal-body" style={{backgroundColor: 'white'}}>
        <InputWithLable onInputChanged={this.onInputNameChanged } title="Användarnamn" placeholder="" type="text" />
        <InputWithLable onInputChanged={this.onInputPasswordChanged} title="Lösenord" placeholder="" type="password" />
      </div>
    );
  }
}

export default ModalBody;