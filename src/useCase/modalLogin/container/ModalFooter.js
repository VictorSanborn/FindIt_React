import React, { Component } from 'react';
import LogInButton from '../component/LogInButton';
import ModalCloseButton from '../component/ModalCloseButton';

class ModalFooter extends Component {
  render() {
    return (
      <div class="modal-footer">
        <ModalCloseButton/>
        <LogInButton name="Logga In"/>
      </div>   
    );
  }
}

export default ModalFooter;