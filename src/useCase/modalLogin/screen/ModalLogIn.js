import React, { Component } from 'react';
import ModalHeader from '../container/ModalHeader';
import ModalBody from '../container/ModalBody';
import ModalFooter from '../container/ModalFooter';

class ModalLogIn extends Component {
  render() {
    return (
      <div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content backgroundColor">
            <ModalHeader dispatch={this.props.dispatch} title={this.props.title}/>
            <ModalBody dispatch={this.props.dispatch} setLoginUser={this.props.setLoginUser} setLoginPassword={this.setLoginPassword} />
            <ModalFooter dispatch={this.props.dispatch} />
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogIn;
