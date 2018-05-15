import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <div>
        <input type="range" class="custom-range" min="0" max="5" value={this.props.userRating !== '' ? this.props.userRating : 5} onChange={this.props.onChangeRating} />
      </div>
    );
  }
}

export default Slider;
