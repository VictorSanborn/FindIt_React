import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { getAd } from '../../../common/functions/API';

class iFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adUrl: '',
    }
  }; 

  render() {
    return (
      <div className="App">
        <Iframe url={getAd()}
          width="600px"
          height="100px"/>
      </div>
    );
  }
}
export default iFrame;
