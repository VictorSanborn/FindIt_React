import React, { Component } from 'react';
import InputButton from '../component/InputButton';
import { getDiscountsByBusiness } from '../../../common/functions/API';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discounts : [],
    }
  }; 

  ListDiscounts = () => {
    getDiscountsByBusiness(this.props.barID).then((response) =>
    { 
      if (response.status === 200){
        console.log(response.data);
        this.setState({
          ...this.state,
          discounts: response.data,
        })
      }
    });
  }

  componentDidMount(){
    this.ListDiscounts();
  }

  render() {
    return (
      <div className="App">
      <h1>{this.state.newPrice} {this.state.newProductId}</h1>
      <table class="table table-bordered table-fit">
        <thead>
          <tr>
            <th scope="col">Namn</th>
            <th scope="col">Rabattyp</th>
            <th scope="col">Krav</th>
            <th scope="col">Giltlighet (Från - Till)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.discounts.map((product) => {
            return (
              <tr>
                <td>{product.Name}</td>
                <td>{product.DiscountType}</td>
                <td>{product.TermsAndConditions}</td>
                <td>{product.StartDate.split('T')[0] + ' - ' + product.ExpiryDate.split('T')[0]}</td>
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
