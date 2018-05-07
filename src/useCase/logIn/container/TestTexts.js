import React, { Component } from 'react';
import TestText from '../component/TestText';
import LogInBox from '../component/LogInBox';

class MainText extends Component {
  render() {
    return (
      <div className="App">
       <TestText text={this.props.logInData}/>
        <LogInBox logInType={this.props.logInType}/>
      </div>
    );
  }
}

export default MainText;
