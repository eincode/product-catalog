import React from "react";
import { Link as LinkRoute, LinkProps } from "react-router-dom";
import styled from "styled-components";

export default (props: LinkProps) => <Link {...props}>{props.children}</Link>;

const Link = styled(LinkRoute)`
  text-decoration: none;
  color: black;
`;
