import React, { Component } from 'react';
import Slider from '../component/Slider';
import Text from '../component/Text';
import TextSmall from '../component/TextSmall';

class RatingInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userRating: this.props.userRating,
    }
  }; 

  onChangeRating = (userRating) =>{
    this.setState({
        ...this.state,
        userRating: userRating.target.value,
      })
  };

  onButtonPress = () => {
      //
      //
      // SKICKA TILL API!
      //
      //
  }

  render() {
    return (
      <div className="App">
        <Text size="h3" text={'Snitt '+this.props.avarage}/>
        {this.props.userID !== '' && this.props.userID !== 0 ?         
          <div>
            <TextSmall text={'Ditt betyg: '+this.state.userRating}/>
            <Slider userRating={this.state.userRating} onChangeRating={this.onChangeRating}/>
            <button class="btn btn-outline-warning text-left" type="button" data-toggle="modal" data-target="#exampleModal">Sätt betyg</button>
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
