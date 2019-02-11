import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

export default class Browse extends Component<RouteComponentProps<any>> {
  render() {
    console.log(this.props);
    return <div>Browse</div>;
  }
}
