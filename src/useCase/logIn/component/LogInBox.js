import React, { Component } from 'react'


class LogInBox extends Component {
  render() {
    return (
        <div className = "App">
          <input type={this.props.logInType}/>
        
      </div>
    );
  }
}

export default LogInBox;