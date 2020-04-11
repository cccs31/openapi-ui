import React, { Component } from 'react';
import Paths from './Paths';

/*
 * Represents all paths and tags. Paths are grouped by tag if tags field exists,
 * otherwise all paths are not grouped.
 */
class PathGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathComponents: [] // store path components
    };
  }

  componentDidMount() {
    this.createPathComponents();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pathsObj !== prevProps.pathsObj)
      this.createPathComponents();
  }

  render() {
    return (
      <div className="PathGroup" style={divStyle}>
        {this.state.pathComponents.map(path => path)}
      </div>
    );
  }

  // create path components for each paths object
  createPathComponents() {
    const paths = [];

    if (this.props.pathsObj != null) {
      for (const path in this.props.pathsObj) {
        paths.push(
          <Paths
            key={path}
            pathKey={path}
            pathVal={this.props.pathsObj[path]}
            requestPath={this.props.requestPath}  
          />
        );
      }
    }

    this.setState({ pathComponents: paths });
  }
}

PathGroup.defaultProps = {
  requestPath: null,
  pathsObj: null,
  tagsObj: null
};

const divStyle = {
  marginTop: "50px"
};

export default PathGroup;
