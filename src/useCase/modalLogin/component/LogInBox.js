import React, { Component } from 'react';

class LogInBox extends Component {
  render() {
    return (
      <div className = "App">
        <input type={this.props.type} class="form-control" placeholder={this.props.placeholder} aria-describedby="basic-addon1" />
      </div>
    );
  }
}

export default LogInBox;