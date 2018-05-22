import React, { Component } from 'react'; 
import ResultField from './ResultField';
import {getAllBusinesses, GetBusinessesByName, getAllProducts, getProductCategories, getLowestPrice,getBusiness} from '../../../common/functions/API';

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

          if (this.props.searchValues[i].label === "Plats" && this.props.searchValues[i].value != "Alla" && this.props.searchValues[i].value !== filterItem.city)
          {
            console.log(this.props.searchValues[i].value);
            console.log(filterItem.city + " verksamhet: " + filterItem.name);
              return true;

          }
        }
        else if (this.props.searchTarget === "Öl"){
        // Product kategori
          if(this.props.searchValues[i].label === "Kategori" && this.props.searchValues[i].value != "Alla" && this.props.searchValues[i].value !== filterItem.category)
          {
            return true;
          }
          if (this.props.searchValues[i].label === "Plats" && this.props.searchValues[i].value != "Alla" )
          {
              if (!filterItem.businessForProduct || this.props.searchValues[i].value !== filterItem.businessForProduct.city)
              {
                return true;
              }
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
      if (response.status == 200)
      {

        for (let i = 0; i < response.data.length; i++)
        {
          getLowestPrice(response.data[i].id).then((priceResponse) => {
            response.data[i].priceReported = priceResponse.data.price;
            response.data[i].businessReported = priceResponse.data.businessId;
            
            if (response.data[i].businessReported && response.data[i].businessReported != null && response.data[i].businessReported != "0" && response.data[i].businessReported != 0)
            {
              getBusiness(response.data[i].businessReported).then((CityResponse) => {
                response.data[i].businessForProduct = CityResponse.data;
            })
            }
          })
        }
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
        {this.props.searchTarget === "Verksamhet" ? // if
        this.state.businesses.map((value, i) => {
          if (!this.FilterInputValues(value))
          {
            return (
              <div class="col-sm-12 SearchResultListObject">
                  <ResultField dataField="Verksamhet" imgsrc={value.imageLink} title={value.name} description={value.description} itemId={value.id}/>
              </div>
            )
          }
        })
        : // else
        this.state.products.map((value, i) => {
          if (!this.FilterInputValues(value))
          {
            return (
              <div class="col-sm-12 SearchResultListObject">
                  <ResultField dataField="Öl" imgsrc={value.imageLink} title={value.name} description={value.category} itemId={value.id} businessForProduct={value.businessForProduct} price={value.priceReported}/>
              </div>
            )
          }
        })
      }
        </div>
    );
  }
}

export default ResultFields;
