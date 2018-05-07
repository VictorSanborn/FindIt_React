import React, { Component } from 'react'


class LogInButton extends Component {
  render() {
    return (
        <div className = "App col-xs-12">
          <button className = "btn btn-main col-xs-12" type = {this.props.behavior}>{this.props.children}</button>
          
      </div>
    );
  }
}

export default LogInButton;