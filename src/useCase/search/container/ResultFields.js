import React, { Component } from 'react'; 
import ResultField from './ResultField';
import {getAllBusinesses, GetBusinessesByName, getAllProducts, getProductCategories} from '../../../common/functions/API';

class ResultFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses : [],
      products : [],
    }
  }; 

  FilterInputValues = (filterItem) => {
    for (let i = 0; i < this.props.searchValues.length; i++)
    {
      if (this.props.searchValues[i].value !== "")
      {
        if (this.props.searchValues[i].label === "Namn")
        {
          console.log(this.props.searchValues[i].value.includes(filterItem.name));
            if (!filterItem.name.toUpperCase().includes(this.props.searchValues[i].value.toUpperCase()))
            {
              return true;
            }
        }
        if (this.props.searchTarget == "Verksamhet")
        {
          if (this.props.searchValues[i].label === "Verifierad" && this.props.searchValues[i].value === "Endast Verifierade")
          {
              if (!filterItem.verified)
              {
                return true;
              }
          }
        }
        else if (this.props.searchTarget == "Öl"){
        // Product kategori
          if(this.props.searchValues[i].label === "Kategori" && this.props.searchValues[i].value === "Endast Verifierade")
          {

          }
        }
      }
    }
  }

  componentDidMount(){
    this.GetValuesBusinesses();
    this.GetValuesProducts();
  }
  

  GetValuesBusinesses = () => {
    getAllBusinesses().then((response) =>
    {
      console.log(response);
      if (response.status === 200)
      {
        this.setState({
          ...this.state,
          businesses: response.data,
        })
      }
    });
  }

  GetValuesProducts = () => {
    getAllProducts().then((response) =>
    {
      console.log(response);
      if (response.status == 200)
      {
        this.setState({
          ...this.state,
          products: response.data,
        })
      }
    });
  }

  render() {
    return (
        <div className="row">
        {this.state.businesses.map((value, i) => {
          if (!this.FilterInputValues(value))
          {
            return (
              <div class="col-sm-12 SearchResultListObject">
                  <ResultField imgsrc={value.imageLink} title={value.name} description={value.description} itemId={value.id}/>
              </div>
              )
          }
        })}
        </div>
    );
  }
}

export default ResultFields;
