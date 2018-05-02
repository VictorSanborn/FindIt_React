import React, { Component } from 'react'


class LogInButton extends Component {
  render() {
    return (
        <div className = "App">
          <button className = "btn btn-main" type = {this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
}

export default LogInButton;