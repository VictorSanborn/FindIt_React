import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="App">
        <h3 class="App-title text-center">{this.props.title}</h3>
      </div>
    );
  }
}

export default Title;