import React, { Component } from 'react';

class ModalCloseButton extends Component {
  render() {
    return (
      <div className = "App">
        <button type="button" class="btn btn-secondary"  data-dismiss="modal">Stäng</button>
      </div>
    );
  }
}

export default ModalCloseButton;