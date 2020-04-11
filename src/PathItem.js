import React, { Component } from 'react';
import ExternalDocs from './ExternalDocs'
import Parameters from './Parameters'
import RequestResult from './RequestResult'

//let FormValue = {};

// contains a path item object - only supports GET, POST, PUT, DELETE
class PathItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      executeForm: false,
      buttonClicked: false,
      formValue: {}
    };
    this.updateForm = this.updateForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateForm(event) {
    const target = event.target;
    let form = this.state.formValue;
    form[target.name] = target.value;
    this.setState({ formValue: form });
  }

  submitForm() {
    this.setState({ executeForm: true, buttonClicked: true });
  }

  componentDidUpdate() {
    if (this.state.buttonClicked)
      this.setState({ buttonClicked: false });
  }

  render() {
    const pathItemHeaderStyle = {
      background: this.operationColor(this.props.pathItemKey)
    };

    return (
      <div className="PathItem" style={pathItemStyle}>
        <div className="PathItemHeader" style={pathItemHeaderStyle}>
          <h3 style={headerStyle}>
            {this.props.pathItemKey.toUpperCase()}
          </h3>
          <h4 style={headerStyle}>{this.props.path}</h4>
          {this.props.pathItemVal['summary'] &&
            <p style={{ display: "inline-block" }}>
              {this.props.pathItemVal['summary']}
            </p>
          }
        </div>

        <div className="PathItemBody">
          {this.props.pathItemVal['description'] &&
            <p>{this.props.pathItemVal['description']}</p>
          }
          <ExternalDocs externalDocObj={this.props.pathItemVal['externalDocs']} />
          <Parameters
            parametersObj={this.props.pathItemVal['parameters']}
            onChange={this.updateForm}
          />
          <button onClick={this.submitForm}>Execute</button>
          {this.state.executeForm &&
            <RequestResult
              formValue={this.state.formValue}
              path={this.props.path}
              pathItemKey={this.props.pathItemKey}
              requestPath={this.props.requestPath}
              buttonClicked={this.state.buttonClicked}
            />
          }
        </div>
      </div>
    )
  }

  operationColor(operation) {
    let color = "transparent";
    switch (operation) {
      case "post":
        color = "#E8F6F0";
        break;
      case "get":
        color = "#EBF3FB";
        break;
      case "put":
        color = "#FBF1E6";
        break;
      case "delete":
        color = "#FBE7E7";
        break;
      default:
        break;
    }
    return color;
  }
}

PathItem.defaultProps = {
  path: null,
  pathItemKey: null,
  pathItemVal: null,
  requestPath: null
};

const headerStyle = {
  marginTop: "10px",
  marginBottom: "10px",
  marginLeft: "10px",
  marginRight: "30px",
  display: "inline-block"
};

const pathItemStyle = {
  marginBottom: "50px"
};

export default PathItem;
