import React, { Component } from 'react';
import RatingInfo from '../container/RatingInfo';

class Rating extends Component {
  render() {
    return (
      <div className="App">        
        <RatingInfo barID={this.props.barID} userID={this.props.userID}/>
      </div>
    );
  }
}

export default Rating;
