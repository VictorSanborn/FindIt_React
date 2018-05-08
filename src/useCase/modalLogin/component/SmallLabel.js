import React, { Component } from 'react'

class SmallLabel extends Component {
  render() {
    return (
        <div className = "App">
            <h5>{this.props.title}</h5>
        </div>
    );
  }
}

export default SmallLabel;