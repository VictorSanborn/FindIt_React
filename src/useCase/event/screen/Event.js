import React, { Component } from 'react';
import Card from '../container/Card';
import {getAllEvents} from '../../../common/functions/API'

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events : [],
    }
  }; 

  componentDidMount(){
    //this.ListEvents();
    this.mountTestData();
 }

  mountTestData = () => {
    let data = [
      {
        "id": "0", "name": "Example Event", "description": "Example Description...!", "category": "testcategory1"
      },
      {
        "id": "1", "name": "Example Event", "description": "Example Description...!", "category": "testcategory1"
      },
      {
        "id": "1", "name": "Example Event", "description": "Example Description...!", "category": "testcategory1"
      }
    ];
    console.log(data);
    this.setState({
      ...this.state,
      events: data,
    })
  }

  ListEvents = () => {
    getAllEvents().then((response) =>
    {
      if (response.status == 200)
      console.log(response);
      this.setState({
        ...this.state,
        events: response.data,
      })
    });
    console.log(this.state.events);
  }

  
  render() {
    return (
      <div className="App">
       <div class="row">
        {
          this.state.events.map((data,i) => {
            console.log(i);
            if (i<12)
            {
              return <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12"><Card key={i} item={data}/></div>
            }

          })
        }
       </div>
      </div>
    );
  }
}

export default Event;
