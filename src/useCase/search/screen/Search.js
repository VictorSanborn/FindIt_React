import React, { Component } from 'react';
import Title from '../../../common/component/Title';
import SearchFields from '../container/SearchFields';
import ResultFields from '../container/ResultFields';
import DropDownInputWithLabel from '../container/DropDownInputWithLabel';
import {getProductCategories, getCities} from '../../../common/functions/API';
import '../style/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetOptions: [{text: "Verksamhet"}, {text: "Öl"}],
      searchTarget: 'Verksamhet',
      productCategories: [],
      searchAlternatives: [{label: "Namn", type:"input", value: ''}, {label: "Verifierad", type:"dropdown", value: 'Alla', options: [{text:"Alla"}, {text:"Endast Verifierade"}]}, {label: "Plats", type:"dropdown", value: 'Alla', options: []}],
      cities: [],
    }

  }; 

  componentDidMount(){
    this.GetSearchAlternatives('Verksamhet');
    this.GetProductCategories();
    this.FetchCities();
  }

  onChangeSearchAlternatives = (searchalt) => {
    this.setState({
      ...this.state,
      searchAlternatives: searchalt,
    })
    console.log(searchalt);
  }

  onChangeSearchTarget = (searchTargetValue) =>{
    let newState = this.GetSearchAlternatives(searchTargetValue.target.text);

    newState = this.SetCities(newState);
    this.setState({
        ...this.state,
        searchTarget: searchTargetValue.target.text,
        searchAlternatives: newState,
      })
  }

  onChangeSearchValues = (searchValues) =>{
    this.setState({
        ...this.state,
        searchValues: searchValues.target.value,
      })
  };

  FetchCities = () => {
    getCities().then((response) =>
    {
      if (response.status === 200)
      {
        let cityList = [{text : "Alla"}];
          for (let i = 0; i < response.data.length; i++)
          {
            cityList.push({text: response.data[i]});
            console.log(cityList);
          }
          let newState = this.state.searchAlternatives;
          for (let i = 0; i < this.state.searchAlternatives.length; i++){
            if (this.state.searchAlternatives[i].label === "Plats")
            {
              newState[i].options = cityList;
            }
          }
          this.setState(() => ({
            ...this.state,
            searchAlternatives: newState,
            cities: cityList,
          }))
      }
    });
  }

  SetCities = (newState) => {
    let cityList = this.state.cities;
    for (let i = 0; i < newState.length; i++){
      if (newState[i].label === "Plats")
      {
        newState[i].options = cityList;
      }
    }
    return newState;
  }

  GetProductCategories = () => {
    getProductCategories().then((response) =>
    {
      let categories = [{text : "Alla"}];
      if (response.status === 200)
      {
        for (let i = 0; i < response.data.length; i++)
        {
          if (response.data[i].groupId === 1)
          {
            categories.push({text: response.data[i].description});
          }
        }
      }
      this.setState({
        ...this.state,
        productCategories: categories,
      })
    });
  }

  GetSearchAlternatives = (alternative) => {
    return alternative === "Verksamhet" ? [{label: "Namn", type:"input", value: ''}, {label: "Verifierad", type:"dropdown", value: 'Alla', options: [{text:"Alla"}, {text:"Endast Verifierade"}]}, {label: "Plats", type:"dropdown", value: 'Alla', options: []}] :  [{label: "Namn", type:"input", value: ''}, {label: "Kategori", type:"dropdown", value:'Alla', options: this.state.productCategories}, {label: "Plats", type:"dropdown", value: 'Alla', options: []}]
  }
  
  render() {
    return (
      <div className="App">
        <div className="SearchBox">
          <DropDownInputWithLabel dropdownOptions={this.state.targetOptions} label="Sökalternativ" selected={this.state.searchTarget} onChange={this.onChangeSearchTarget}/>
          <br/>
          <SearchFields onChangeSearchValues={this.onChangeSearchAlternatives} searchAlternatives={this.state.searchAlternatives}  />
        </div>
        <ResultFields searchValues={this.state.searchAlternatives} searchTarget={this.state.searchTarget}/>
      </div>
    );
  }
}

export default Search;
