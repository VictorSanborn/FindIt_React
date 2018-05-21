import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div>
        <a href={this.props.link} class="btn btn-outline-warning" style={{margin: '12px'}}>{this.props.name}</a>
      </div>
    );
  }
}

export default Button;