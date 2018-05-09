import React, { Component } from 'react';

class LogInButton extends Component {
  render() {
    return (
      <div className = "App">
        <button type="button" onPress={this.props.on_press} class={this.props.styleText}>{this.props.name}</button>
      </div>
    );
  }
}

export default LogInButton;