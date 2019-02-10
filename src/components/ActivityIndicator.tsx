import React from "react";
import styled from "styled-components";
import IC_LOADING from "../assets/ic_loading.gif";

export default () => <Loader src={IC_LOADING} />;

const Loader = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin: 20px 0px;
`;
