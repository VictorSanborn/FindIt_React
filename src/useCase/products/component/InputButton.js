import React, { Component } from 'react'

class InputButton extends Component {

  onButtonClick = () => {
    this.props.onClick(document.getElementById("price"+this.props.Id).value, this.props.Id);
    document.getElementById("price"+this.props.Id).value = '';
  }

  render() {
    return (
      <div class="input-group mb-3">
        <input type="number" id={"price"+this.props.Id} class="form-control" placeholder={this.props.placeholder} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div class="input-group-append">
          <button class="btn btn-outline-warning" type="button" onClick={() => (this.onButtonClick())}>{this.props.btnName}</button>
        </div>
      </div>
    );
  }
}

export default InputButton;
