import React, { Component } from 'react';
import InputWithLable from '../container/InputWithLable';
import { actionCreators } from '../../../common/redux/reducer';

class ModalBody extends Component {
  render() {

    return (
      <div class="modal-body" style={{backgroundColor: 'white'}}>
        <InputWithLable onInputChanged={this.props.setUsername} title="Användarnamn" placeholder="" type="text" />
        <InputWithLable onInputChanged={this.props.setLoginPassword} title="Lösenord" placeholder="" type="password" />
      </div>
    );
  }
}

export default ModalBody;