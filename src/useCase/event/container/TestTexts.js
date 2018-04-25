import React, { Component } from 'react';
import TestText from '../component/TestText';
import TestBox from '../component/TextBox';

class MainText extends Component {
  render() {
    return (
      <div className="App">
        <TestText text="Event 1"/>
        <TestBox/>
        <TestText text="Event 2"/>
        <TestBox/>
        <TestText text="Event 3"/>
        <TestBox/>
      </div>
    );
  }
}

export default MainText;
