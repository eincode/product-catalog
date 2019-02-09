import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return <button style={styles.container}>BELI</button>;
  }
}

const styles = {
  container: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "15px",
    paddingRight: "15px",
    display: "flex",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(170,0,90)",
    color: "white",
    fontWeight: "bold",
    fontSize: "12px",
    borderRadius: "10px"
  }
};
