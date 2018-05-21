import React, { Component } from 'react';
import InputButton from '../component/InputButton';
import { GetProductsFromBusiness, GetPricesFromProductAtBusiness } from '../../../common/functions/API';

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

  
  componentDidMount(){
    this.ListProducts();
  }

  render() {
    return (
      <div className="App">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Namn</th>
            <th scope="col">Typ</th>
            <th scope="col">Styrka Vol%</th>
            <th scope="col">Pris</th>
          </tr>
        </thead>
        <tbody>
          {this.state.products.map((product) => {
            return (
              <tr>
            <td>{product.name}</td>
            <td>{product.type}</td>
            <td>5,2%</td>
            <td>56:-</td>
            {
              this.props.userID !== 1 & this.props.userID !== '' ?
              <td>
                <InputButton placeholder="Rapportera Pris" btnName="Skicka"/>
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
    );
  }
}

export default List;
