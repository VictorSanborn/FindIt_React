import React, { Component } from 'react';
import InputButton from '../component/InputButton';

class List extends Component {
  render() {
    return (
      <div className="App">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Namn</th>
            <th scope="col">Styrka Vol%</th>
            <th scope="col">Pris</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Staropramen</td>
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
        </tbody>
      </table>
      </div>
    );
  }
}

export default List;
