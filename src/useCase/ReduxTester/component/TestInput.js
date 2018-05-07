import React, { Component } from 'react'

class TestText extends Component {
  render() {
    return (
      <div className="App">
        <div class="input-group mb-3">
          <input type="text" class="form-control" value={this.props.user} onChange={this.props.setUser}/>
        </div>
      </div>
    );
  }
}

export default TestText;
