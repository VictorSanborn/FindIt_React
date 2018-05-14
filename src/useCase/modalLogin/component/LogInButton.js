import React, { Component } from 'react';

class LogInButton extends Component {
  render() {
    return (
      <div className = "App">
        <button onClick={this.props.onLogin} type="button" class={this.props.styleText}>{this.props.name}</button>
      </div>
    );
  }
}

export default LogInButton;