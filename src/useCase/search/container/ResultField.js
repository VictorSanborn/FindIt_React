import React, { Component } from 'react'; 
import {getBusiness} from '../../../common/functions/API';

class ResultField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            businessForProduct: ''
        }
      }; 



  render() {
    console.log(this.props.price + this.props.businessForProduct) 
    return (
        <a className="row ListItemClickable" href={this.props.dataField === "Verksamhet"? '/Business/' + this.props.itemId : undefined}>
            <div class="col-sm-12">
                {this.props.dataField == "Verksamhet"? <img src={this.props.imgsrc} class="OrganisationImage"></img> : ""}
                <h5 style={{margin: '10px'}} class="col-sm-6 text-left">{this.props.title}</h5>
                <div style={{margin: '10px'}} class="col-sm-6 text-left">{this.props.description}</div>
                {this.props.dataField == "Öl" ?
                    this.props.price != null && this.props.businessForProduct ?
                        <div style={{margin: '10px'}} class="col-sm-6 text-left">{this.props.price}kr hos <a href={'/Business/' + this.props.businessForProduct.id}>{this.props.businessForProduct.name}</a></div>
                        :
                        <div style={{margin: '10px', color: "#ff0000"}} class="col-sm-6 text-left">Inget pris rapporterat på den här produkten</div>
                    
                :
                <div className="col-sm-3 float-right text-right">
                </div>
                }
            </div>
        </a>
    );
  }
}

export default ResultField;
