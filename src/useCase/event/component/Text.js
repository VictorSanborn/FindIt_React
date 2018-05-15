import React, { Component } from 'react';

class Text extends Component {

  componentDidMount(){
    let text = this.props.text;
    if (this.props.text.length > 64)
    {
      text = this.props.text.substring(0,62) + '..';
    }
 }

  render() {
    return (
      <div>
        <h5 class="card-title">{this.props.titel}</h5>
        <p class="card-text">{this.props.text}</p>
      </div>
    );
  }
}

export default Text;