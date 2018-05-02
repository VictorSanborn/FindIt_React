import React, { Component } from 'react'; 

class ResultField extends Component {
  render() {
    return (
        <div className="col-sm-12 row SearchResultListObject" style={{}}>
            <img class="OrganisationImage"></img>

            <div class="row">
                <h5 style={{margin: '10px'}} class="col-sm-12 text-left">{this.props.title}</h5>
                <div style={{margin: '10px'}} class="col-sm-12 text-left">{this.props.description}</div>
            </div>
        </div>
    );
  }
}

export default ResultField;
