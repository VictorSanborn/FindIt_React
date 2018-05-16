import React, { Component } from 'react';
import Card from '../container/Card';
import Button from '../component/Button';
import {getAllEvents} from '../../../common/functions/API';

class Event extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events : [],
    }
  }; 

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
      console.log(response);
      if (response.status == 200)
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
        <table class="table">
          <tbody>
            {
              this.state.events.map((data,i) => {
                  return (
                    <div>
                      <div>
                        <tr data-toggle="collapse" href={'#'+data.Id} role="button" aria-expanded="false" aria-controls="collapseExample">
                          <td class="col-sm-12">
                            <div class="row">
                              <div class="col TransparentMediumText">{data.date.split('T')[0]}</div>
                              <div class="col MediumText">{data.name}</div>
                              <div class="col TransparentMediumText">
                                {data.businesses.map((val) => {
                                  return val.name
                                })}
                              </div>
                            </div>
                          </td>
                          <thead>
                            <tr>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                        </tr>
                      </div>
                      <div class="collapse" id={data.Id}>
                        <div class="card card-body">
                          <div class="col-sm-12 row">
                            <div class="col-sm-6 MediumText">Datum: {data.date.split('T')[0]}</div>
                            <div class="col-sm-6 MediumText">
                              Vart: {data.businesses.map((val) => {
                                return val.name
                              })}
                            </div>
                          </div>
                          <br/>
                          <div>
                            {data.description} <br/>
                          </div>
                          <br/>
                          <div>
                            {
                              data.businesses.map((val) => {
                                return <a href={'/business/'+val.Id} class="btn btn-outline-warning">Gå till bar</a>
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </div>
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
