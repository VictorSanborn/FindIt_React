import React, { Component } from 'react'; 

class DropDown extends Component {
  render() {
  
    return (
        <div style={{border: '1px solid #ced4da'}} class={'col-sm-12 ' + 'noSpace ' + 'text-left ' + 'dropdown ' + this.props.borderOption }>
            <button class="dropdown-toggle btn btn-secondary InputItem col-sm-12" style={{background: '#fff', color: '#000', border: 0}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.props.selected}</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
                this.props.dropdownOptions ?
                
                    this.props.dropdownOptions.map((value, i) => {
                        
                        return <a dataField={this.props.dataField} onClick={this.props.onChange} value={value} class="dropdown-item">{value.text}</a>
                
                    })
                :
                ""
            }
            </div>
        </div>
    );
  }
}

export default DropDown;
