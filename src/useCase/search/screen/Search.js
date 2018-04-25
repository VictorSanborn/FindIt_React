import React, { Component } from 'react';
import Title from '../../../common/component/Title';
import SearchFields from '../container/SearchFields';
import '../style/Search.css';


class Search extends Component {
  render() {
    return (
      <div className="App">
        <Title text="Hitta öl"/>
        <SearchFields/>
      </div>
    );
  }
}

export default Search;
