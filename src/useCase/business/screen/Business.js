import React, { Component } from 'react';
import Information from '../container/Information';
import ListGroup from '../container/ListGroup';
import Image from '../component/Image';
import Rating from '../../rating/screen/Rating';
import Products from '../../products/screen/Products';
import { getBuisness } from '../../../common/functions/API';

class Business extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      adress: '',
      city: '',
      description: '',
      imageLink: 'https://vignette.wikia.nocookie.net/roblox-phantom-forces/images/7/7c/Noimage.png/revision/latest?cb=20171115203949',
      name: '',
      telephone: '',
      verified: false,
      zipcode: '',
    }
  }; 

  componentDidMount(){
    getBuisness(this.props.match.params.barId).then((response) => {
      this.setState({
        ...this.state,
        adress: response.data.adress,
        city: response.data.city,
        description: response.data.description,
        imageLink: response.data.imageLink,
        name: response.data.name,
        telephone: response.data.telephone,
        verified: response.data.verified,
        zipcode: response.data.zipcode,
      })
    });
 }

  render() {
    return (
      <div class="col">
        <div class="row">
          <div className="contentPadding col-xs-12 col-sm-7" >
            <div>
              <Information 
                imgUrl={this.state.imageLink} 
                title={this.state.name}
                presentation={this.state.description}
                certified={this.state.verified}/>
              <Rating barID={this.props.match.params.barId} userID={this.props.userID}/>
            </div>
          </div>
          <div class="col-sm-5">
            <div>
              <Image url={this.state.imageLink}/>
            </div>
            <div>
              <ListGroup 
                data={[
                  {icon:'fas fa-certificate', info:this.state.verified ? 'Verifierad!' : 'Inte Verifierad'},
                  {icon:'fas fa-phone', info: this.state.telephone},   
                  {icon:'fas fa-angle-down', info: this.state.adress},
                  {icon:'fas fa-university', info: this.state.city},
                  {icon:'fas fa-map-marker', info: this.state.zipcode}, 
                  ]}/>  
            </div>
          </div>
        </div>
        <div class="row col">
          <Products barID={this.props.match.params.barId} userID={this.props.userID}/>  
        </div>
      </div>
    );
  }
}

export default Business;
