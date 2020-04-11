import React, { Component } from 'react';
import Info from './Info';
import PathGroup from './PathGroup';
import ExternalDocs from './ExternalDocs';

// UI generated from the specification file
class Specification extends Component {
  // assume scheme is https, assume host and basePath are provided
  createRequestPath() {
    return "https://" + this.props.specObj['host'] + this.props.specObj['basePath'];
  }

  render() {
    if (!this.props.specObj)
      return null;

    return (
      <div className="Specification" style={divStyle}>
        <Info
          infoObj={this.props.specObj['info']}
          requestPath={this.createRequestPath()}
        />
        <ExternalDocs externalDocObj={this.props.specObj['externalDocs']} />
        <PathGroup
          requestPath={this.createRequestPath()}
          pathsObj={this.props.specObj['paths']}
          tagsObj={this.props.specObj['tags']}
        />
      </div>
    );
  }
}

Specification.defaultProps = {
  specObj: null
};

const divStyle = {
  marginTop: "50px",
};

export default Specification;
