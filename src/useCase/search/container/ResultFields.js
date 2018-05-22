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
        if (this.props.searchValues[i].label === "Namn") // kollar namnfilter
        {
            if (!filterItem.name.toUpperCase().includes(this.props.searchValues[i].value.toUpperCase()))
            {
              return true;
            }
        }

        if (this.props.searchTarget == "Verksamhet") // om den filterar verksamhet...
        {
          if (this.props.searchValues[i].label === "Verifierad" && this.props.searchValues[i].value === "Endast Verifierade")
          {
              if (!filterItem.verified)
              {
                return true;
              }
          }

          if (this.props.searchValues[i].label === "Plats" && this.props.searchValues[i].value != "Alla" && this.props.searchValues[i].value !== filterItem.city) //kollar platsfilter
          {
            return true;
          }
        }
        else if (this.props.searchTarget === "Öl"){ // om den ska filtrera produkt
        // Product kategori
          if(this.props.searchValues[i].label === "Kategori" && this.props.searchValues[i].value != "Alla" && this.props.searchValues[i].value !== filterItem.category)
          {
            return true;
          }
          if (this.props.searchValues[i].label === "Plats" && this.props.searchValues[i].value != "Alla" ) //kollar platsfilter
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

  CreatePaginationButtons = (listObjectPerPage, totalListed) => {
    let listPages = [];
    for(let i = 0; i < (totalListed / listObjectPerPage); i++)
    {
      listPages.push(<li class="page-item"><a onClick={() => this.props.onChangePage(i)} class="page-link" >{i+1}</a></li>);
    }
    return listPages;
  }

  GetValuesProducts = () => {
    getAllProducts().then((response) =>
    {
      if (response.status == 200)
      {

        for (let i = 0; i < response.data.length; i++)
        {
          getLowestPrice(response.data[i].id).then((priceResponse) => {
            console.log(priceResponse);
            response.data[i].priceReported = priceResponse.data.price;
            response.data[i].businessReported = priceResponse.data.businessId;
            
            if (response.data[i].businessReported && response.data[i].businessReported != null && response.data[i].businessReported != "0" && response.data[i].businessReported != 0)
            {
              getBusiness(response.data[i].businessReported).then((CityResponse) => {
                console.log(CityResponse);
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
    let j = 0;
    let totalListed = 0;
    let listObjectPerPage = 6; 
    return (
        <div className="row">
        {this.props.searchTarget === "Verksamhet" ? // if
        this.state.businesses.map((value, i) => {
          if (!this.FilterInputValues(value))
          {
            totalListed++;
            if((this.props.pageNr > 0 && totalListed > this.props.pageNr * listObjectPerPage && totalListed < this.props.pageNr*listObjectPerPage+listObjectPerPage+1) || (this.props.pageNr == 0 &&  totalListed <= listObjectPerPage )) {
              j++;
              return (
                <div class="col-sm-12 SearchResultListObject">
                    <ResultField dataField="Verksamhet" imgsrc={value.imageLink} title={value.name} description={value.description} itemId={value.id}/>
                </div>
              )
            } // LÄGG TILL I LISTAN
          }
        })
        : // else
        this.state.products.map((value, i) => {
            if (!this.FilterInputValues(value))
            {
              totalListed++;
              if((this.props.pageNr > 0 && totalListed > this.props.pageNr * listObjectPerPage && totalListed < this.props.pageNr*listObjectPerPage+listObjectPerPage+1) || (this.props.pageNr == 0 &&  totalListed <= listObjectPerPage )) {
                j++;
              return (
                <div class="col-sm-12 SearchResultListObject">
                    <ResultField dataField="Öl" imgsrc={value.imageLink} title={value.name} description={value.category} itemId={value.id} businessForProduct={value.businessForProduct} price={value.priceReported}/>
                </div>
              )
            }
          }
        })
      }

      {
      this.CreatePaginationButtons(listObjectPerPage, totalListed).length > 1 ? 
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a onClick={this.props.pageNr>0? () => this.props.onChangePage(this.props.pageNr-1) : () => this.props.onChangePage(this.props.pageNr)} class="page-link" >Backa</a></li>
          {
            this.CreatePaginationButtons(listObjectPerPage, totalListed).map((value)=> {
              console.log(this.CreatePaginationButtons(listObjectPerPage, totalListed).length-1)
              return value
            })
          }
          <li class="page-item"><a onClick={this.props.pageNr<this.CreatePaginationButtons(listObjectPerPage, totalListed).length-1? () => this.props.onChangePage(this.props.pageNr+1) : () => this.props.onChangePage(this.props.pageNr)} class="page-link" >Nästa</a></li>
        </ul>
      </nav>
      :
      ""
      }
      </div>
    );
  }
}

export default ResultFields;

