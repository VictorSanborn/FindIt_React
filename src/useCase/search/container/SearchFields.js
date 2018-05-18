import React, { Component } from 'react'; 
import SearchInputWithLabel from '../container/SearchInputWithLabel';
import DropDownInputWithLabel from '../container/DropDownInputWithLabel';

class SearchFields extends Component {
  constructor(props){
      super(props);
      this.state = {
          selectedValue: 'välj bar',
        };
  }

  inputOnchange = (inputChanged) =>{
    for (let i = 0; i < this.props.searchAlternatives.length; i++){
        if (this.props.searchAlternatives[i].label == inputChanged.target.attributes.dataField.value)
        {
            this.props.searchAlternatives[i].value = inputChanged.target.value;
        }
    }
    this.props.onChangeSearchValues(this.props.searchAlternatives);

  }

  dropdownOnChange = (dropdownChanged) =>{
      console.log(dropdownChanged.target);
    for (let i = 0; i < this.props.searchAlternatives.length; i++){
        if (this.props.searchAlternatives[i].label == dropdownChanged.target.attributes.dataField.value)
        {
            this.props.searchAlternatives[i].value = dropdownChanged.target.text;
        }
    }
    this.props.onChangeSearchValues(this.props.searchAlternatives);

  }

  render() {
    return (
        <div className="row" style={{margin: 0}}>

            {
                this.props.searchAlternatives.map((data,i) => {
                    
                    if (data.type === "input")
                    {
                        return <div class="col noSpace"><SearchInputWithLabel dataField={data.label} onChange={this.inputOnchange} borderOption={'BorderLeft'} label={data.label} /></div>
                    }
                    else if (data.type ==="dropdown")
                    {
                        return <div class="col noSpace"><DropDownInputWithLabel selected={data.value} dataField={data.label} onChange={this.dropdownOnChange} dropdownOptions={data.options} selectedValue={this.state.selectedValue} borderOption={'BorderRight'} label={data.label} /></div>
                    }

                })
            }

            
        </div>
    );
  }
}

export default SearchFields;
