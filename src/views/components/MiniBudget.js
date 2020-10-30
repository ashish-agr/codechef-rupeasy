import React from "react";

import colors from "../../style/colors";

import {
  income,
  housing,
  transportation,
  living,
  personal,
  totalExpenses,
  savings,
  savingsG,
  debt
} from "../formData/calculation";

import { Col } from "reactstrap";

import styled from "react-emotion";

import { Container, Row as StyledRow } from "../../style/layout";
import { ColorIdentifier } from "../../style/deco";
import { H5Underline } from "../../style/typography";
import { ComponentFontSizes } from "../../style/mediaQueries";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconBox = styled("div")`
  display: inline-block;
  text-align: center;
  width: 40px;
`;

const Row = styled(StyledRow)`
  ${ComponentFontSizes};
`;

const BudgetRow = props => (
  <Row underline={props.underline} className={props.class}>
    <ColorIdentifier xs={1} sm={1} md={1} fillColor={props.fillColor} />
    <Col className="p-0">
      <IconBox>
        <FontAwesomeIcon icon={props.icon} />
      </IconBox>
      {props.title}
    </Col>
    <Col xs={3} sm={3} md={3} lg={4}>
    ₹{props.amount}
    </Col>
  </Row>
);

export const MiniBudget = props => {
  const { values } = props;
  return (
    <Container>
      <Row className="justify-content-center">
        <H5Underline>Monthly Budget</H5Underline>
      </Row>
      <BudgetRow
        underline="true"
        class="font-weight-bold"
        fillColor={colors.color1}
        icon="dollar-sign"
        title="Monthly Income"
        amount={income(values)}
      />
      <BudgetRow
        fillColor={colors.color2}
        icon="home"
        title="Housing"
        amount={housing(values)}
      />
      <BudgetRow
        fillColor={colors.color3}
        icon="car"
        title="Transportation"
        amount={transportation(values)}
      />
      <BudgetRow
        fillColor={colors.color4}
        icon="walking"
        title="Living"
        amount={living(values)}
      />
      <BudgetRow
        underline="true"
        fillColor={colors.color5}
        icon="user"
        title="Personal"
        amount={personal(values)}
      />
      <BudgetRow
        fillColor={colors.colors}
        icon="dollar-sign"
        title="Savings Goal"
        amount={savingsG(values)}
      />
      <BudgetRow
        underline="true"
        fillColor={colors.colors}
        icon="dollar-sign"
        title="Savings to Collect"
        amount={savings(values)}
      />
      <BudgetRow
        underline="true"
        fillColor={colors.colorc}
        icon="dollar-sign"
        title="Debt to Pay"
        amount={debt(values)}
      />
      <BudgetRow
        class="font-weight-bold"
        fillColor={"transparent"}
        icon="file-invoice"
        title="Monthly Expenses"
        amount={totalExpenses(values)}
      />
      
    </Container>
  );
};
