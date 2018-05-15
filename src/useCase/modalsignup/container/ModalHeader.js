import React, { Component } from 'react';

class ModalHeader extends Component {
  render() {
    return (
      <div class="modal-header App-header">
          <div>
            <h5 class="modal-title App-title" id="exampleModalLongTitle">{this.props.title}</h5>
          </div>
          
          <div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="App-title">&times;</span>
            </button>
          </div>
        </div>
    );
  }
}

export default ModalHeader;