import React, { Component } from 'react';
import Img from '../component/Img';
import Text from '../component/Text';
import Button from '../component/Button';

class Card extends Component {
  render() {
    return (
      <div className="App">
        <div class="card">
          <Img imgsrc="https://mittkok.expressen.se/wp-content/uploads/2016/06/massaol-636x426.jpg"/>
            <div class="card-body">
            <Text titel="Öl party" text="Redo för ett riktigt party"/>
            <Button link="/Reklam"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
