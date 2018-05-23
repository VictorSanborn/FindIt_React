import React, { Component } from 'react';
import InputButton from '../component/InputButton';
import {GetProductsFromBusiness, GetPricesFromProductAtBusiness, sendPrice } from '../../../common/functions/API';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [],
      prices : [],
      pricesAverage : [],
    }
  }; 

  ListProducts = () => {
    GetProductsFromBusiness(this.props.barID).then((response) =>
    { 
      if (response.status === 200){
        console.log(response.data);
        this.setState({
          ...this.state,
          products: response.data,
        })
      }
    });
  }

  RateProduct = (price, productId) => {
    sendPrice(this.props.barID, price, productId, this.props.userID).then((response) => {
      this.ListProducts();
    });

  }

  componentDidMount(){
    this.ListProducts();
  }

  render() {
    return (
      <div className="App">
        <div class="table-responsive">
          <h1>{this.state.newPrice} {this.state.newProductId}</h1>
          <table class="table table-bordered table-fit">
            <thead>
              <tr>
                <th scope="col">Namn</th>
                <th scope="col">Typ</th>
                <th scope="col">Styrka Vol%</th>
                <th scope="col">Serverings Typ</th>
                <th scope="col">Pris (Ägare)</th>
                <th scope="col">Pris snitt (användare)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => {
                return (
                  <tr>
                <td>{product.name}</td>
                <td>{product.type}</td>
                {
                  product.attributeList.map((attribute) => {
                    console.log(attribute.attributeId);
                    if(attribute.attributeId == 2){
                      return <td>{attribute.value}%</td>
                    }
                  })
                }
                {
                  product.attributeList.map((attribute) => {
                    console.log(attribute.attributeId);
                    if(attribute.attributeId == 6){
                      return <td>{attribute.value}</td>
                    }
                  })
                }
                <td>
                  { 
                    product.verifiedPrice !== 0 ? 
                    product.verifiedPrice.toFixed(2)+"kr" :
                    <p class="TransparentSmallText">Uppgift Saknas</p>
                  }
                </td>
                <td>
                  { 
                    product.unverifiedPrice !== 0 ? 
                    product.unverifiedPrice.toFixed(2)+"kr" :
                    <p class="TransparentSmallText">Uppgift Saknas</p>
                  }
                </td>
                {
                  this.props.userID !== 1 & this.props.userID !== '' ?
                  <td>
                    <InputButton placeholder="Rapportera Pris" btnName="Skicka" Id={product.id} onClick={this.RateProduct}/>
                  </td>
                  :
                  <td> <p class="TransparentSmallText">Logga in för att sätta pris</p> </td>
                }           
                </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default List;
