import React, { Component } from 'react'; 

class SearchBox extends Component {
  render() {
    return (
      <div>
        <div class={'text-left ' + 'input-group ' + this.props.borderOption}>
            <input type="text" class="InputItem form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        </div>
      </div>
    );
  }
}

export default SearchBox;
