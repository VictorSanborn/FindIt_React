import React, { Component } from 'react';
import TestText from '../component/TestText';
import TestInput from '../component/TestInput';
import TestButton from '../component/TestButton';
import { actionCreators } from '../../../common/redux/reducer';

class InputWithLabel extends Component {
  state = {}

  setText = (text) => {
    this.props.setUser(text.target.value);
  }

  render() {
    return (
      <div className="App">
        <TestText user={this.props.user}/>
        <TestInput user={this.props.user} setUser={this.setText} />
        <TestButton btnName='Ändra'/>
      </div>
    );
  }
}

export default InputWithLabel;
