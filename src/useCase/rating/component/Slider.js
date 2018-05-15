import React, { Component } from 'react'

class Slider extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-sm-11">
          <input type="range" class="custom-range" min="0" max="5" value={this.props.userRating !== '' ? this.props.userRating : 5} onChange={this.props.onChangeRating} />
        </div>
        <div>
          <p>{this.props.sliderRating}</p>
        </div>
      </div>
    );
  }
}

export default Slider;
