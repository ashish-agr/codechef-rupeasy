import styled from "react-emotion";
import colors from "./colors";

import { Button as RSButton } from "reactstrap";

import { ButtonFontSizes } from "./mediaQueries";

// import { ComponentFontSizes } from "../style/mediaQueries";

export const ColorIdentifier = styled("span")`
  align-self: center;
  height: 12px;
  width: 12px;
  border-radius: 20px;
  background-color: ${props => props.fillColor};
`;

export const StyledButton = styled(RSButton)`
  border-radius: 10px;
  padding: 10px 10px;
  margin: 0 5px 0 0;
  background-color: ${props => {
    if (props.name) {
      return props.name === "PREVIOUS" ? colors.color6 : colors.color7;
    } else {
      return props.color;
    }
  }};
  color: white;
  transition: all 0.2s;
  ${ButtonFontSizes};
  &:hover {
    color: black;
    background-color: white;
    text-decoration: none;
  }
`;

export const StyledSolidLink = styled("a")`
  border: solid 1px ${colors.softBorder};
  padding: 10px 10px;
  margin: 0 5px 0 0;
  background-color: ${colors.color1};
  border-radius: 10px;
  color: white;
  transition: all 0.2s;
  ${ButtonFontSizes};
  &:hover {
    color: black;
    background: white;
    text-decoration: none;
  }
`;

export const StyledLink = styled("a")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.darkBlue};
  font-weight: 700;
  border: 1px solid transparent;
  padding: 10px 10px;
  /* margin: 5px; */
  transition: all 0.2s;
  border-radius: 2px;
  ${ButtonFontSizes};
  &:hover {
    text-decoration: none;
    /* border-right: 1px solid black;
    border-left: 1px solid black; */
    border-radius: 5px;
    border: 1px solid ${colors.darkBlue};
  }
`;
