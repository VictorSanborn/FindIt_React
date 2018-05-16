import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
      <div className="App">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Namn</th>
            <th scope="col">Procent</th>
            <th scope="col">Pris</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Staropramen</td>
            <td>5,2%</td>
            <td>56:-</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Baggens IPA</td>
            <td>6,1%</td>
            <td>59:-</td>
          </tr>
          <tr>
          <th scope="row">2</th>
            <td>Grebbestad</td>
            <td>5,9%</td>
            <td>86:-</td>
          </tr>
        </tbody>
      </table>
      </div>
    );
  }
}

export default Card;
