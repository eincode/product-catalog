import React from "react";
import { Link as LinkRoute } from "react-router-dom";
import styled from "styled-components";

export default props => <Link {...props}>{props.children}</Link>;

const Link = styled(LinkRoute)`
  text-decoration: none;
  color: black;
`;
