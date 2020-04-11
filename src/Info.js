import React, { Component } from 'react';

// info field - required
class Info extends Component {
  render() {
    return (
      <div className="Info" style={divStyle}>
        <div className="requiredInfo">
          <h1 className="title" style={headerStyle}>
            {this.props.infoObj['title']}
          </h1>
          <h3 className="version" style={headerStyle}>
            v{this.props.infoObj['version']}
          </h3>
        </div>
        {this.props.requestPath &&
          <h5
            className="requestPath"
            style={h5Style}
          >
            Base URL: {this.props.requestPath}
          </h5>
        }
        {this.props.infoObj['description'] &&
          <p className="description">{this.props.infoObj['description']}</p>
        }

        <table className="optionalInfo">
          <tbody>
            <tr className="termsOfService">
              {<TermsOfService terms={this.props.infoObj['termsOfService']} />}
            </tr>
            <tr className="contact">
              {<Contact contactObj={this.props.infoObj['contact']} />}
            </tr>
            <tr className="license">
              {<License licenseObj={this.props.infoObj['license']} />}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function TermsOfService(props) {
  if (!props.terms)
    return null;

  return (
    <React.Fragment>
      <th>Terms of Service</th>
      <td>
        <a href={props.terms}>
          {props.terms}
        </a>
      </td>
    </React.Fragment>
  );
}

function Contact(props) {
  if (!props.contactObj)
    return null;

  return (
    <React.Fragment>
      <th>Contact</th>

      <td>
        {props.contactObj['name'] && !props.contactObj['url'] &&
          <React.Fragment>
            {props.contactObj['name']}
            <br />
          </React.Fragment>
        }
        {!props.contactObj['name'] && props.contactObj['url'] &&
          <React.Fragment>
            <a href={props.contactObj['url']}>{props.contactObj['url']}</a>
            <br />
          </React.Fragment>
        }
        {props.contactObj['name'] && props.contactObj['url'] &&
          <React.Fragment>
            <a href={props.contactObj['url']}>{props.contactObj['name']}</a>
            <br />
          </React.Fragment>
        }
        {props.contactObj['email'] &&
          <React.Fragment>
            <a href={props.contactObj['email']}>{props.contactObj['email']}</a>
            <br />
          </React.Fragment>
        }
      </td>
    </React.Fragment>
  );
}

function License(props) {
  if (!props.licenseObj)
    return null;

  return (
    <React.Fragment>
      <th>License</th>

      <td>
        {props.licenseObj['name'] && !props.licenseObj['url'] &&
          <React.Fragment>
            {props.licenseObj['name']}
            <br />
          </React.Fragment>
        }
        {!props.licenseObj['name'] && props.licenseObj['url'] &&
          <React.Fragment>
            <a href={props.licenseObj['url']}>{props.licenseObj['url']}</a>
            <br />
          </React.Fragment>
        }
        {props.licenseObj['name'] && props.licenseObj['url'] &&
          <React.Fragment>
            <a href={props.licenseObj['url']}>{props.licenseObj['name']}</a>
            <br />
          </React.Fragment>
        }
      </td>
    </React.Fragment>
  );
}

Info.defaultProps = {
  infoObj: null,
  requestPath: null
};

const headerStyle = {
  marginTop: "10px",
  marginRight: "30px",
  display: "inline-block"
};

const divStyle = {
  marginBottom: "10px"
};

const h5Style = {
  marginTop: "0px",
  paddingBottom: "10px",
  marginBottom: "0px"
}

export default Info;
