import React, { Component } from 'react';
import List from '../container/List';

class Discounts extends Component {
  render() {
    return (
      <div class="col-xs-12" style={{width: '100%'}}>
        <List barID={this.props.barID} />
      </div>
    );
  }
}

export default Discounts;
