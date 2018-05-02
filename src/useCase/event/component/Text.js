import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <div className="App">
        <h5 class="card-title">{this.props.titel}</h5>
        <p class="card-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Text;