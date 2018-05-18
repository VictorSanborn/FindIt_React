import React, { Component } from 'react'; 
import ResultField from './ResultField';
import {getAllBusinesses, GetBusinessesByName} from '../../../common/functions/API';

class ResultFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses : [],
    }
    this.GetValuesBusinesses();
  }; 

  FilterInputValues = (filterItem) => {
    for (let i = 0; i < this.props.searchValues.length; i++)
    {
      if (this.props.searchValues[i].value != "")
      {
        if (this.props.searchValues[i].label == "Namn")
        {
          console.log(this.props.searchValues[i].value.includes(filterItem.name));
            if (!filterItem.name.includes(this.props.searchValues[i].value))
            {
              return true;
            }
        }
        if (this.props.searchValues[i].label == "Verifierad" && this.props.searchValues[i].value == "Endast Verifierade")
        {
            if (!filterItem.verified)
            {
              return true;
            }
        }
      }
    }
  }

  GetValuesBusinesses = () => {
    getAllBusinesses().then((response) =>
    {
      console.log(response);
      if (response.status == 200)
      {
        this.setState({
          ...this.state,
          businesses: response.data,
        })
      }
    });
  }
  render() {
    return (
        <div className="row">
        {this.state.businesses.map((value, i) => {
          if (i = 1){
            if (!this.FilterInputValues(value))
            {
              return (
                <div class="col-sm-12 SearchResultListObject">
                    <ResultField imgsrc={value.imageLink} title={value.name} description={value.description} itemId={value.id}/>
                </div>
                )
            }
          }
        })}

        </div>
    );
  }
}

export default ResultFields;
