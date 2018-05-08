import React, { Component } from 'react'

class TestButton extends Component {
  render() {
    return (
      <div className="App">
        <div class="input-group mb-3">
        <button type="button" class="btn btn-primary">{this.props.btnName}</button>
        </div>
      </div>
    );
  }
}

export default TestButton;
