import React, { Component } from 'react';
import List from '../container/List';

class Products extends Component {
  render() {
    return (
      <div class="col-xs-12" style={{width: '100%'}}>
        <List barID={this.props.barID} userID={this.props.userID} />
      </div>
    );
  }
}

export default Products;
