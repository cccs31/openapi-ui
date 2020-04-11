import React, { Component } from 'react';

// External documentation object
class ExternalDocs extends Component {
  render() {
    if (!this.props.externalDocObj)
      return null;

    return (
      <div className="ExternalDocs" style={divStyle}>
        {this.props.externalDocObj['description'] &&
          <a href={this.props.externalDocObj['url']}>
            {this.props.externalDocObj['description']}
          </a>
        }
        {!this.props.externalDocObj['description'] &&
          <a href={this.props.externalDocObj['url']}>
            {this.props.externalDocObj['url']}
          </a>
        }
      </div>
    );
  }
}

ExternalDocs.defaultProps = {
  externalDocObj: null
};

const divStyle = {
  marginRight: "30px",
  display: "inline-block"
};

export default ExternalDocs;
