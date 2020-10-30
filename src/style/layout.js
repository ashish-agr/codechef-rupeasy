import styled from "react-emotion";

import colors from "./colors";

import { Container as RSContainer, Row as RSRow } from "reactstrap";

export const Container = styled(RSContainer)`
  border: solid
    ${props => (props.borderColor ? props.borderColor : colors.softBorder)} 1px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const Row = styled(RSRow)`
  margin: 5px 10px 0;
  padding-bottom: 5px;
  border-bottom: ${props =>
    props.underline ? `1px solid ${colors.softBorder}` : "none"};
`;

export const IconBox = styled("div")`
  display: inline-block;
  width: 30px;
`;
