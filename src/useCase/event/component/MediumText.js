import React, { Component } from 'react';

class MediumText extends Component {

  componentDidMount(){
    let text = this.props.text;
    if (this.props.text.length > 64)
    {
      text = this.props.text.substring(0,62) + '..';
    }
 }

  render() {
    return (
      <div class="col-sm-6 MediumText">
        {this.props.text}
      </div>
    );
  }
}

export default MediumText;