import React, { Component } from "react";
import styled from "styled-components";

interface Props {
  notSpaced?: boolean;
  title: string;
}

export default class Section extends Component<Props> {
  render() {
    return (
      <Container notSpaced={this.props.notSpaced}>
        {this.props.title}
        {this.props.children}
      </Container>
    );
  }
}
const Container = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
  width: calc(100% - 40px);
  font-weight: bold;
  flex-direction: column;
  margin-bottom: ${(props: Props) => (props.notSpaced ? "0px" : "5px")};
` as any;
