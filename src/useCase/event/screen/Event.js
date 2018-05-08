import React, { Component } from 'react';
import Card from '../container/Card';


class Event extends Component {
  render() {
    return (
      <div className="App">
       <div class="row">
       <div class="col">  
       <Card/>
       </div>
       <div class="col">  
       <Card/>
       </div>
       <div class="col">  
       <Card/>
       </div>
       </div>
      </div>
    );
  }
}

export default Event;
