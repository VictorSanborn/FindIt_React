import React, { Component } from 'react';
import ModalHeader from '../container/ModalHeader';
import ModalBody from '../container/ModalBody';
import ModalFooter from '../container/ModalFooter';

class ModalLogIn extends Component {
  render() {
    return (
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content backgroundColor">
            <ModalHeader title={this.props.title}/>
            <ModalBody />
            <ModalFooter />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogIn;
