import React, { Component } from 'react';
import Title from '../../../common/component/Title';
import SearchFields from '../container/SearchFields';
import ResultFields from '../container/ResultFields';
import '../style/Search.css';


class Search extends Component {
  render() {
    return (
      <div className="App">
        <Title text="Hitta öl"/>
        <SearchFields/>
        <ResultFields/>
      </div>
    );
  }
}

export default Search;
