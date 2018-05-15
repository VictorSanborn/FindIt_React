import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <a href={this.props.link} class="btn btn-primary" style={{margin: '12px'}}>Mer info</a>
      </div>
    );
  }
}

export default Button;