import React, { Component } from 'react'

class TestText extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default TestText;
