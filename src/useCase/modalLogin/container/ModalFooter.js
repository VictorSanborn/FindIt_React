import React, { Component } from 'react';
import LogInButton from '../component/LogInButton';

class ModalFooter extends Component {
  render() {
    return (
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Stäng</button>
        <button type="button" class="btn btn-primary">Logga in</button>
      </div>   
    );
  }
}

export default ModalFooter;