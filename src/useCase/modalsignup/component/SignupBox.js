import React, { Component } from 'react';

class SignupBox extends Component {
  render() {
    return (
      <div className = "App">
        <input onChange={this.props.onChange} value={this.props.text} type={this.props.type} class="form-control" aria-describedby="basic-addon1" />
      </div>
    );
  }
}

export default SignupBox;