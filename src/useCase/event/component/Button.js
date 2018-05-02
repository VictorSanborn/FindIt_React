import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="App">
        <a href={this.props.link} class="btn btn-primary">Mer info</a>
      </div>
    );
  }
}

export default Button;