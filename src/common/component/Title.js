import React, { Component } from 'react';


class Title extends Component {
  render() {
    return (
      <div>
        <h1 className="text-left" style={{color: '#6A0002', padding: '20px'}}>{this.props.text}</h1>
      </div>
    );
  }
}

export default Title;
