import React, { Component } from 'react';
import EventList from '../container/EventList';
import {getAllEvents} from '../../../common/functions/API';

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events : [],
    }
  }; 

  mountTestData = () => {
    let data = [];
    console.log(data);
    this.setState({
      ...this.state,
      events: data,
    })
  }

  ListEvents = () => {
    getAllEvents().then((response) =>
    {
      console.log(response);
      if (response.status === 200)
      console.log(response);
      this.setState({
        ...this.state,
        events: response.data,
      })
    });
    console.log(this.state.events);
  }
  
  componentDidMount(){
    this.ListEvents();
    //this.mountTestData();
  }
  
  render() {
    return (
      <div className="App">
      <div class="col">
        <h1 class="text-left App-title">Evenemang</h1>
        <p class="text-left TransparentSmallText">Klicka på ett evenemang för att visa mer information</p>
      </div>
        <table class="table">
          <tbody>
            {
              this.state.events.map((data,i) => {
                  return (
                    <EventList data={data} />
                  )
                }
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Event;
