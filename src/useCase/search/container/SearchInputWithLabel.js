import React, { Component } from 'react'; 
import SmallTitle from '../../../common/component/SmallTitle';
import SearchBox from '../component/SearchBox';

class SearchInputWithLabel extends Component {
  render() {
    return (
      <div>
        <SmallTitle text={this.props.label}/>
        <SearchBox dataField={this.props.dataField} onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default SearchInputWithLabel;
