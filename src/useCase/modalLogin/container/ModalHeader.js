import React, { Component } from 'react';
import { actionCreators } from '../../../common/redux/reducer';

class ModalHeader extends Component {

  removeLogInBoxDataFunction = () => {
    this.props.dispatch(actionCreators.removeLoginBoxData(''));
  }

  render() {
    return (
      <div class="modal-header App-header">
        <h5 class="modal-title App-title" id="exampleModalLongTitle">{this.props.title}</h5>
        <button onClick={this.removeLogInBoxDataFunction} type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" class="App-title">&times;</span>
        </button>
      </div>  
    );
  }
}

export default ModalHeader;