import React, { Component } from 'react';
import TransparentMediumText from '../component/TransparentMediumText';
import MediumText from '../component/MediumText';
import SmallText from '../component/SmallText';
import Button from '../component/Button';

class EventList extends Component {
  render() {
    return (
      <div>
        <div>
          <tr data-toggle="collapse" href={'#'+this.props.data.Id} role="button" aria-expanded="false" aria-controls="collapseExample">
            <td class="col-sm-12">
              <div class="row">
                <TransparentMediumText text={this.props.data.date.split('T')[0]} />
                <MediumText text={this.props.data.name} />
                <TransparentMediumText text={this.props.data.businesses.map((val) => { return val.name })} />
              </div>
            </td>
            <thead>
              <tr>
                <th scope="col"></th>
              </tr>
            </thead>
          </tr>
        </div>
        <div class="collapse" id={this.props.data.Id}>
          <div class="card card-body">
            <div class="col-sm-12 row">
              <MediumText text={"Datum: "+this.props.data.date.split('T')[0]}/>
              <MediumText text={"Vart: "+this.props.data.businesses.map((val) => {return val.name})}/>
            </div>
            <br/>
            <SmallText text={this.props.data.description} />
            <br/>
            <br/>
            <div>      
              {
                this.props.data.businesses.map((val) => {
                 return <Button link={'/business/'+val.Id} name={"Gå Till "+val.name}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventList;
