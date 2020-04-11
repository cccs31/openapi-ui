import React, { Component } from 'react';
import Specification from './Specification';

// contains the entire app
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { specObj: null };
    this.fileSelected = this.fileSelected.bind(this)
  }

  render() {
    return (
      <div className="App" style={divStyle}>
        <h4>Assumes OpenAPI Specification version 2.0</h4>
        <label htmlFor="specFile">Select file:</label>
        <input
          type="file"
          id="specFile"
          onChange={this.fileSelected}
        />
        <Specification specObj={this.state.specObj} />
      </div>
    );
  }

  fileSelected() {
    const selectedFile = document.getElementById('specFile').files[0];
    const textPromise = selectedFile.text();
    textPromise.then(
      result => this.setState({ specObj: JSON.parse(result) }),
      error => alert("Invalid file")
    );
  }
}

const divStyle = {
  margin: "0 auto",
  padding: "10px",
  maxWidth: "1000px"
};

export default App;
