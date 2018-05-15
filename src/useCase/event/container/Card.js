import React, { Component } from 'react';
import Img from '../component/Img';
import Text from '../component/Text';
import Button from '../component/Button';

class Card extends Component {
  render() {
    return (
      <div className="App">
        <div class="card">
          <p>{this.props.key}</p>
          <Img imgsrc="https://mittkok.expressen.se/wp-content/uploads/2016/06/massaol-636x426.jpg"/>
          <div class="card-body">
            <Text titel={this.props.item.name} text={this.props.item.description}/>
            <Button link="/Reklam"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
