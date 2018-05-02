import React, { Component } from 'react'; 
import SmallTitle from '../../../common/component/SmallTitle';
import DropDown from '../component/DropDown';

class DropDownInputWithLabel extends Component {
  render() {
    return (
      <div>
        <SmallTitle text={this.props.label}/>
        <DropDown dropdownOptions={this.props.dropdownOptions}/>
      </div>
    );
  }
}

export default DropDownInputWithLabel;
