import React, { Component } from 'react';

class Parameters extends Component {
  render() {
    if (!this.props.parametersObj)
      return null;

    const parametersStyle = {
      marginTop: "10px",
      width: "80%"
    };

    return (
      <table className="Parameters" style={parametersStyle}>
        <thead className="ParametersHeader">
          <tr>
            <th style={{ textAlign: "left", width: "30%" }}>Name</th>
            <th style={{ textAlign: "left", width: "70%" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.parametersObj.map(
            parameter =>
              <Parameter
                key={parameter['name']}
                parameterObj={parameter}
                onChange={this.props.onChange}
              />
          )}
        </tbody>
      </table>
    )
  }
}

function Parameter(props) {
  const parameterStyle = {
    marginLeft: "10px"
  };

  return (
    <tr className="Parameter" style={parameterStyle}>
      <td>
        <div className="ParameterName">
          {props.parameterObj['name']}
          {props.parameterObj['required'] === true &&
            <sup>* required</sup>
          }
        </div>
        {props.parameterObj['in'] !== "body" &&
          <React.Fragment>
            {props.parameterObj['type'] === "array" &&
              <code>array: {props.parameterObj['items']['type']}</code>
            }
            {props.parameterObj['type'] !== "array" &&
              <code>
                {props.parameterObj['type']}: {props.parameterObj['format']}
              </code>
            }
            {props.parameterObj['collectionFormat'] &&
              <React.Fragment>
                <p>Array format: <code>
                  {props.parameterObj['collectionFormat']}</code>
                </p>
              </React.Fragment>
            }
          </React.Fragment>
        }
      </td>
      {props.parameterObj['description'] &&
        <td>{props.parameterObj['description']}</td>
      }
      <InputField
        inputName={props.parameterObj['name']}
        inputType={props.parameterObj['type']}
        onChange={props.onChange}
      />
    </tr>
  )
}

function InputField(props) {
  let inputType = undefined;
  switch (props.inputType) {
    case 'array':
      inputType = "text";
      break;
    case 'integer':
      inputType = "number";
      break;
    case null:
      inputType = "text";
      break;
    default:
      inputType = "text";
      break;
  }

  return (
    <td>
      <label>{props.inputName}
        <input
          name={props.inputName}
          type={inputType}
          onChange={props.onChange}
        />
      </label>
    </td>
  )
}

export default Parameters;
