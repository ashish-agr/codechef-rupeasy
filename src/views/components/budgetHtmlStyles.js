import { Row, Col } from "reactstrap";

import styled, { css } from "react-emotion";
import colors from "../../style/colors";

export const Under = styled(Col)`
  border-bottom: 1px solid ${colors.softBorder};
  margin-right: 10px;
`;

export const IconBox = styled("div")`
  display: inline-block;
  text-align: center;
  width: 40px;
`;

export const ColHeaders = styled(Row)`
  text-align: center;
  margin: 0 0 10px;
`;

export const ContentRow = styled(Row)`
  padding: 5px 0;
`;

export const TotalContentRow = styled(ContentRow)`
  font-weight: 700;
`;

export const Container = styled("div")`
  border: solid ${colors.softBorder} 1px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const BudgetHeader = styled("h1")`
  padding: 25px 0;
  text-align: center;
`;

export const TotalsContainer = styled(Container)`
  font-weight: 700;
`;

export const darkbackground = css({
  background: colors.softBorder,
  fontWeight: "bold",
  marginRight: "5px"
});
