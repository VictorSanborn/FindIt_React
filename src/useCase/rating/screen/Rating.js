import React, { Component } from 'react';
import RatingInfo from '../container/RatingInfo';

class Rating extends Component {
  render() {
    return (
      <div className="App">        
        <RatingInfo userRating={this.props.userRating} avarage={this.props.avarage} userID={this.props.userID}/>
      </div>
    );
  }
}

export default Rating;
