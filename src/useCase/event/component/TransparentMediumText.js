import React, { Component } from 'react';

class TransparentMediumText extends Component {

  componentDidMount(){
    let text = this.props.text;
    if (this.props.text.length > 64)
    {
      text = this.props.text.substring(0,62) + '..';
    }
 }

  render() {
    return (
      <div class="col TransparentMediumText">
        {this.props.text}
      </div>
    );
  }
}

export default TransparentMediumText;