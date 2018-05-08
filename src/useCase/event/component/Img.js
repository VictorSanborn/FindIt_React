import React, { Component } from 'react';

class Img extends Component {
  render() {
    return (
      <div className="App">
        <img class="card-img-top" src={this.props.imgsrc} alt="Card image cap" />
      </div>
    );
  }
}

export default Img;
