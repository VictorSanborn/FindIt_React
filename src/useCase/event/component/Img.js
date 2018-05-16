import React, { Component } from 'react';

class Img extends Component {
  render() {
    return (
      <div>
        <img class="card-img-top" src={this.props.imgsrc} alt="Card image cap" />
      </div>
    );
  }
}

export default Img;
