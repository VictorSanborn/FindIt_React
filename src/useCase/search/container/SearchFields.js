import React, { Component } from 'react'; 
import SearchInputWithLabel from '../container/SearchInputWithLabel';
class SearchFields extends Component {
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
                <SearchInputWithLabel borderOption={'BorderRight'} label="Pris" />
            </div>
        </div>
    );
  }
}

export default SearchFields;
