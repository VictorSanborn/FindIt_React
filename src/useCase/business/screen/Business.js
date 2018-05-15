import React, { Component } from 'react';
import Information from '../container/Information';
import ListGroup from '../container/ListGroup';
import Image from '../component/Image';
import Rating from '../../rating/screen/Rating';

class Business extends Component {
  render() {
    return (
      <div class="row">
        <div className="contentPadding col-xs-12 col-sm-7" >
          <div>
            <Information 
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/4/43/Bar-P1030319.jpg" 
              title="JO;s Tentadränkar-hak"
              presentation="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
          </div>
          <Rating avarage="4,5" userRating="5" userID='1'/>
        </div>
        <div class="col-sm-5">
          <div>
            <Image url="https://upload.wikimedia.org/wikipedia/commons/4/43/Bar-P1030319.jpg"/>
          </div>
          <div>
            <ListGroup 
              data={[
                {icon:'fas fa-certificate', info:'Verified!'},
                {icon:'fas fa-phone', info:' 0520-123 4567'},   
                {icon:'fas fa-angle-down', info:'Västerlanda Hagen 181'},
                {icon:'fas fa-university', info:'Västerlanda'},
                {icon:'fas fa-map-marker', info:' 463 93'}, 
                ]}/>  
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
