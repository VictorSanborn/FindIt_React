import React, { Component } from 'react';


class SmallTitle extends Component {
  render() {
    return (
      <div class="noSpace">
        <h4 className="text-left SmallTitle" style={{color: '#6A0002'}}>{this.props.text}</h4>
      </div>
    );
  }
}

export default SmallTitle;
