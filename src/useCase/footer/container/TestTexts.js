import React, { Component } from 'react';
import TestText from '../component/TestText';

class MainText extends Component {
  render() {
    return (
      <div className="App">
        <TestText text="Rad 1"/>
        <TestText text="Rad 2"/>
        <TestText text="Rad 3"/>
      </div>
    );
  }
}

export default MainText;
