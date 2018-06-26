import React, { render } from "react";
import _ from "lodash";

export default class Fullname extends React.Component {
  render(props) {
    if (this.props.firstName) {
      var firstName = this.props.firstName;
    } else {
      var firstName = "Kori";
    }
    if (this.props.lastName) {
      var lastName = this.props.lastName;
    } else {
      var lastName = "Roys";
    }
    var Name = _.capitalize(firstName) + " " + _.capitalize(lastName);
    return <div className="fullname">{Name}</div>;
  }
}
