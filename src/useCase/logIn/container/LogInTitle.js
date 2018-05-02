import React, { Component } from 'react';
import TestText from '../component/TestText';
import LogInBox from '../component/LogInBox';

class LogInTitle extends Component {
  render() {
    return (
      <div className="App">
        <TestText text={this.props.logInData}/>
      </div>
  
    );
  }
}

export default LogInTitle;
