import React, { Component } from 'react';

class ListGroup extends Component {
  render() {
    return (
      <div className="App">
        <ul class="list-group text-left">
          {this.props.data.map((row) => {
            return <li class="list-group-item"> <i class={row.icon}/> {row.info}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
