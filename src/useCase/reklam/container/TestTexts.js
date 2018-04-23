import React, { Component } from 'react'; 
import TestText from '../component/TestText';

class MainText extends Component {
  render() {
    return (
      <div className="App">
        <TestText text="Rad 3"/>
        <TestText text="Rad 4"/>
        <TestText text="Rad 5"/>
      </div>
    );
  }
}

export default MainText;
