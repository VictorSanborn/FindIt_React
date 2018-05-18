import React, { Component } from 'react'; 

class ResultField extends Component {
  render() {
    return (
        <div className="row">
            <div>
                <img src={this.props.imgsrc} class="OrganisationImage"></img>
            </div>
            <div class="col-sm-6">
                <h5 style={{margin: '10px'}} class="col-sm-6 text-left">{this.props.title}</h5>
                <div style={{margin: '10px'}} class="col-sm-6 text-left">{this.props.description}</div>
            </div>
            <div className="col-sm-3 text-right">
                <div className="align-middle">
                    <button className="btn btn-outline-warning align-middle" style={{margin: '5px'}} href={'/Business/' + this.props.itemId}>Till bar</button>
                </div>
            </div>
        </div>
    );
  }
}

export default ResultField;
