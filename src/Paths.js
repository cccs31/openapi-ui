import React, { Component } from 'react';
import PathItem from './PathItem';

// contains a paths object, which can have multiple path item objects
class Paths extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItemComponents: [] // store path item components
    }
  }

  componentDidMount() {
    this.createPathItemComponents();
  }

  componentDidUpdate(prevProps) {
    if ((this.props.pathKey !== prevProps.pathKey)
      && (this.props.pathVal !== prevProps.pathVal)) {
      this.createPathItemComponents();
    }
  }

  render() {
    return (
      <div className="Path" style={pathsStyle}>
        {this.state.pathItemComponents.map(pathItem => pathItem)}
      </div>
    );
  }

  createPathItemComponents() {
    const pathItems = [];

    if ((this.props.pathKey != null) && (this.props.pathVal != null)) {
      for (const pathItem in this.props.pathVal) {
        // assume operationId field exists
        pathItems.push(
          <PathItem
            key={this.props.pathVal[pathItem]['operationId']}
            path={this.props.pathKey}
            pathItemKey={pathItem}
            pathItemVal={this.props.pathVal[pathItem]}
            requestPath={this.props.requestPath}
          />
        );
      }
    }

    this.setState({ pathItemComponents: pathItems });
  }
}

Paths.defaultProps = {
  pathKey: null,
  pathVal: null,
  requestPath: null
};

const pathsStyle = {
  marginBottom: "100px",
}


export default Paths
