import React, { Component } from 'react';
import TestTexts from '../container/TestTexts';
import '../style/footerCss.css';

class Footer extends Component {
  render() {
    return (
      <div className="App" class="footerColor">
        <div class="col-sm-4" >
          <TestTexts />
        </div>
      </div>
    );
  }
}

export default Footer;
