import React, { Component } from 'react';
import SignupBox from '../component/SignupBox';
import SmallLabel from '../component/SmallLabel';


class InputWithLable extends Component {
  render() {
    return (
      <div class="modal-body" style={{backgroundColor: 'white'}}>
        <SmallLabel title={this.props.title} />
        <SignupBox text={this.props.text} onChange={this.props.onChange} placeholder={this.props.placeholder} type={this.props.type}/>
      </div>
    );
  }
}

export default InputWithLable;