import React, { Component } from 'react'; 
import ResultField from './ResultField';

class ResultFields extends Component {
  GetValues = () => {
    return [{imgsrc: 'test', title: 'ttttitle', description: 'descccriptttion'},{imgsrc: 'test', title: 'ttttitle', description: 'descccriptttion'}];
  }
  render() {
    return (
        <div className="SearchBox row">
        {this.GetValues().map((value) => {
            return (
            <div class="col-sm-12">
                <ResultField imgsrc={value.imgsrc} title={value.title} description={value.description}/>
            </div>)
        })}

        </div>
    );
  }
}

export default ResultFields;
