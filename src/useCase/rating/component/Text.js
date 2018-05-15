import React, { Component } from 'react'

class Text extends Component {
  render() {
    return (
      <div>
        <h3 class="text-left MediumText">{this.props.text}</h3>
      </div>
    );
  }
}

export default Text;
