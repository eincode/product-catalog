import React from "react";
import styled from "styled-components";

export default props => (
  <Button icon={props.icon} type={props.type}>
    {props.label}
  </Button>
);

const Button = styled.button`
  padding: 10px 15px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => {
    switch (props.type) {
      case "solid":
        return "rgb(170, 0, 90)";
      default:
        return "transparent";
    }
  }};
  color: ${props => {
    switch (props.type) {
      case "solid":
        return "white";
      case "active":
        return "rgb(170, 0, 90)";
      case "inactive":
        return "rgb(82, 82, 82)";
    }
  }};
  border-color: ${props => {
    switch (props.type) {
      case "solid":
        return "rgb(170, 0, 90)";
      case "active":
        return "rgb(170, 0, 90)";
      case "inactive":
        return "rgb(82, 82, 82)";
    }
  }};
  border-width: 1px;
  border-style: solid;
  font-weight: bold;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
`;
