import React, { Component } from 'react'; 
import ResultField from './ResultField';

class ResultFields extends Component {
  GetValues = () => {
    return [{imgsrc: 'test', title: 'Business Title', description: 'Description'},{imgsrc: 'test', title: 'Business Title', description: 'Description'}];
  }
  render() {
    return (
        <div className="row">
        {this.GetValues().map((value) => {
            return (
            <div class="col-sm-12 SearchResultListObject">
                <ResultField imgsrc={value.imgsrc} title={value.title} description={value.description}/>
            </div>)
        })}

        </div>
    );
  }
}

export default ResultFields;
