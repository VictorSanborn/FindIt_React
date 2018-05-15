import React, { Component } from 'react'

class TextSmall extends Component {
  render() {
    return (
      <div>
        <p class="text-left">{this.props.text}</p>
      </div>
    );
  }
}

export default TextSmall;
