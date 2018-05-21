import React, { Component } from 'react'

class InputButton extends Component {
  render() {
    return (
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder={this.props.placeholder} aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
          <button class="btn btn-outline-warning" type="button" onClick={this.props.onClick}>{this.props.btnName}</button>
        </div>
      </div>
    );
  }
}

export default InputButton;
