import React, { Component } from 'react';
import Image from '../component/Image';
import Title from '../component/Title';
import Certificate from '../component/Certificate';

class Information extends Component {
  render() {
    return (
      <div className="App">
        <div class="row">      
          <div class="row">
            <div class="col-12">
              <div class="row"> 
                <div class="col-12">       
                  <Certificate />
                </div>
                <Title title={this.props.title}/>
              </div>
            </div>          
            <div class="text-left">
              <p>{this.props.presentation}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
