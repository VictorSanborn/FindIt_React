import React, { Component } from 'react';
import Title from '../../../common/component/Title';
import SearchFields from '../container/SearchFields';
import ResultFields from '../container/ResultFields';
import DropDownInputWithLabel from '../container/DropDownInputWithLabel';
import '../style/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetOptions: [{text: "Verksamhet"}, {text: "Öl"}],
      searchTarget: 'Verksamhet',
      searchAlternatives: this.GetSearchAlternatives('Verksamhet'),
    }
  }; 

  onChangeSearchAlternatives = (searchalt) => {
    this.setState({
      ...this.state,
      searchAlternatives: searchalt,
    })
    console.log(searchalt);
  }

  onChangeSearchTarget = (searchTargetValue) =>{
    this.setState({
        ...this.state,
        searchTarget: searchTargetValue.target.text,
        searchAlternatives: this.GetSearchAlternatives(searchTargetValue.target.text),
      })
  }

  onChangeSearchValues = (searchValues) =>{
    this.setState({
        ...this.state,
        searchValues: searchValues.target.value,
      })
  };


  GetSearchAlternatives = (alternative) => {
    return alternative === "Verksamhet" ? [{label: "Namn", type:"input", value: ''}, {label: "Verifierad", type:"dropdown", value: 'Alla', options: [{text:"Alla"}, {text:"Endast Verifierade"}]}, {label: "Plats", type:"input", value: ''}] :  [{label: "Namn", type:"input", value: ''}, {label: "Kategori", type:"dropdown", value:'', options: ["Alla", "Endast Verifierade"]}, {label: "Plats", type:"input", value:''}]
  }
  
  render() {
    return (
      <div className="App">
        <div className="SearchBox">
          <DropDownInputWithLabel dropdownOptions={this.state.targetOptions} label="Sökalternativ" selected={this.state.searchTarget} onChange={this.onChangeSearchTarget}/>
          <br/>
          <SearchFields searchValues={this.state.searchValues} onChangeSearchValues={this.onChangeSearchAlternatives} searchAlternatives={this.state.searchAlternatives}  />
        </div>
        <ResultFields searchValues={this.state.searchAlternatives} searchTarget={this.state.searchTarget}/>
      </div>
    );
  }
}

export default Search;
