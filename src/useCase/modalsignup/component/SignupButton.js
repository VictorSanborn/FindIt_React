import React, { Component } from 'react'

class SignupButton extends Component {
  render() {
    return (
      <div className = "App">
        <button type="button" onPress={this.props.on_press} class="btn btn-primary">{this.props.name}</button>
      </div>
    );
  }
}

export default SignupButton;