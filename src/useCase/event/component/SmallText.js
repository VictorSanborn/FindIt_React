import React, { Component } from 'react';

class SmallText extends Component {

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
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default SmallText;