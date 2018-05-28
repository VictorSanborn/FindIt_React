import React, { Component } from 'react';
import Iframe from 'react-iframe';
import {getAd} from '../../../common/functions/API'

class iFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adUrl: '',
      data: {},
    }
    this.fetchAd();
  }; 

  fetchAd = () => {
    getAd().then((response) => {
      console.log(response);
      this.setState({
        data: response.data[0],
      })
    })
  }

  render() {
    return (
      <div className="adsBox">
         <a
          title={this.state.data.onHooverText}
          > {this.state.data.resource} </a>

      </div>
    );
  }
}
export default iFrame;
