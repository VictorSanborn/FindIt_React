import React, { Component } from 'react';
import TestTexts from '../container/TestTexts';
import '../style/footerCss.css';
import Ads from '../../../useCase/ads/screen/Ads';

class Footer extends Component {
  render() {
    return (
      <footer className="App">
        
        <div class="row">
          <div class="col-sm-6 text-left">
            <h1 class="App-title">Find It</h1>
            <Ads />
          </div>
          <div class="col-sm-6 text-right h1">
            <i class="fab fa-facebook-square iconPaddingRight"></i>
            <i class="fab fa-instagram iconPaddingRight"></i>
            <i class="fab fa-twitter-square iconPaddingRight"></i>
            <i class="fab fa-youtube-square"></i>
          </div>
        </div>
        <div>
          <i class="fas fa-beer App-title"></i>
        </div>
      </footer>
    );
  }
}

export default Footer;
