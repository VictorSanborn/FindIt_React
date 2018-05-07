import React, { Component } from 'react'

class TestText extends Component {
  render() {
    return (
      <div className="App">
        <h3>{this.props.text}</h3>
      </div>
    );
  }
}
export default TestText;
