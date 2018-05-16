import React, { Component } from 'react';
import Slider from '../component/Slider';
import Text from '../component/Text';
import TextSmall from '../component/TextSmall';
import { getReview, sendReview } from '../../../common/functions/API';

class RatingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderRating: 0.0,
      userRating: 0.0,
      avarageRating: 0.0,
    }
  }; 

  componentDidMount(){
    getReview(this.props.barID, this.props.userID).then((response) => {
      this.setState({
        ...this.state,
        avarageRating: response.data.Rating .toFixed(2),
        userRating: response.data.URating,
        sliderRating: response.data.URating,
      })
    });
 }

  onChangeRating = (sliderRating) =>{
    this.setState({
        ...this.state,
        sliderRating: sliderRating.target.value,
      })
  };

  onButtonPress = () => {
    sendReview(this.props.userID, this.props.barID, this.state.sliderRating).then((response) => {
      //Gett the new data from the api after the review is sent
      getReview(this.props.barID, this.props.userID).then((response) => {
        this.setState({
          ...this.state,
          avarageRating: response.data.Rating.toFixed(2),
          userRating: response.data.URating,
          sliderRating: response.data.URating,
        })
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Text size="h3" text={'Snitt '+this.state.avarageRating}/>
        {this.props.userID !== '' && this.props.userID !== 0 ?         
          <div>
            <TextSmall text={'Ditt betyg: '+this.state.userRating}/>
            <Slider sliderRating={this.state.sliderRating} onChangeRating={this.onChangeRating}/>
            <button class="btn btn-outline-warning text-left" onClick={this.onButtonPress} type="button" data-toggle="modal" data-target="#exampleModal">Sätt betyg</button>
          </div> : 
          <div>
            <Text size="h3" text="Logga in för att sätta betyg!"/>
          </div>
        }

      </div>
    );
  }
}

export default RatingInfo;
