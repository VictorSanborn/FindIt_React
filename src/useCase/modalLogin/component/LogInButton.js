import React, { Component } from 'react'

class LogInButton extends Component {
  render() {
    return (
      <div className = "App">
        <button className = "btn btn-main" onPress={this.props.on_press}>{this.props.name}</button>
      </div>
    );
  }
}

export default LogInButton;