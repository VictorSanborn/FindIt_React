import React, { Component } from 'react'; 
import SearchInputWithLabel from '../container/SearchInputWithLabel';
import DropDownInputWithLabel from '../container/DropDownInputWithLabel';

class SearchFields extends Component {
  /*constructor(props){
      super(props);
      this.state = {
          selectedValue: 'välj bar', 
        };
  }*/

  GetOptions = () => {
      return [{text: "test1"}, {text: "test2"}]
  }
  render() {
    return (
        <div className="SearchBox row" style={{padding: '20px'}}>
            <div class="col noSpace">
                <SearchInputWithLabel borderOption={'BorderLeft'} label="Stad" />
            </div>
            <div class="col noSpace">
                <SearchInputWithLabel borderOption={'BorderMiddle'} label="Öl" />
            </div>
            <div class="col noSpace">
                <SearchInputWithLabel borderOption={'BorderMiddle'} label="Pris" />
            </div>
            <div class="col noSpace">
                <DropDownInputWithLabel dropdownOptions={this.GetOptions()} selectedValue={this.state.selectedValue} borderOption={'BorderRight'} label="Pub" />
            </div>
        </div>
    );
  }
}

export default SearchFields;
