import React, { Component } from 'react';

class RequestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      done: false
    }
    this.performRequest = this.performRequest.bind(this);
  }

  componentDidMount() {
    this.performRequest();
  }

  componentDidUpdate() {
    if (this.props.buttonClicked)
      this.performRequest();
  }

  performRequest() {
    const http = new XMLHttpRequest();
    const re = /\/{.*}/;
    const requestPath
      = this.props.requestPath + this.props.path.replace(re, '') + '/'
        + Object.values(this.props.formValue)[0];
    console.log("path: " + requestPath);
    console.log("request type: " + this.props.pathItemKey.toUpperCase());

    http.open(this.props.pathItemKey.toUpperCase(), requestPath);

    http.onload = () => {
      this.setState({ text: http.responseText, done: true });
      console.log(http.responseText);
    }

    http.send();
  }

  render() {
    if (!this.state.done)
      return null;

    return (
      <div className="RequestResult">
        <p>{this.state.text}</p>
      </div>
    )
  }
}

RequestResult.defaultProps = {
  formValue: null,
  path: null,
  pathItemKey: null,
  requestPath: null,
  buttonClicked: false
};

export default RequestResult
