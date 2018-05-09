import React, { Component } from 'react';
import InputWithLabel from '../container/InputWithLabel';


class ReduxTest extends Component {


  render() {
    return (
      <div className="App">
        <InputWithLabel user={this.props.user} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

export default ReduxTest;
