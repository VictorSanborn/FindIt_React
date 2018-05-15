import React, { Component } from 'react';

class SignupButton extends Component {
  render() {
    return (
      <div className = "App">
        <button type="button" onClick={this.props.onClick} class="btn btn-primary">{this.props.name}</button>
      </div>
    );
  }
}

export default SignupButton;