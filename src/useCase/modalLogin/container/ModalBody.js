import React, { Component } from 'react';
import InputWithLable from '../container/InputWithLable';

class ModalBody extends Component {
  render() {
    return (
      <div class="modal-body" style={{backgroundColor: 'white'}}>
        <InputWithLable title="Användarnamn" placeholder="" type="text" />
        <InputWithLable title="Lösenord" placeholder="" type="password" />
      </div>
    );
  }
}

export default ModalBody;