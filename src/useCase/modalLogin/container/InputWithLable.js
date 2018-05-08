import React, { Component } from 'react';
import LogInBox from '../component/LogInBox';
import SmallLabel from '../component/SmallLabel';


class InputWithLable extends Component {
  render() {
    return (
      <div class="modal-body" style={{backgroundColor: 'white'}}>
        <SmallLabel title={this.props.title} />
        <LogInBox placeholder={this.props.placeholder} type={this.props.type}/>
      </div>
    );
  }
}

export default InputWithLable;