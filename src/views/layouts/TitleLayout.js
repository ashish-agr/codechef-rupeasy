import React from "react";
import { Container as RSContainer } from "reactstrap";
import styled from "react-emotion";

import ylcLogo from "../../assets/logo.png";

import { H4Title } from "../../style/typography";

const ImageContainer = styled(RSContainer)`
  text-align: center;
  img {
    max-width: 100%;
  }
`;

export default () => (
  <ImageContainer>
    <img src={ylcLogo} alt="" />
    <H4Title>Budgeting Tool</H4Title>
  </ImageContainer>
);
