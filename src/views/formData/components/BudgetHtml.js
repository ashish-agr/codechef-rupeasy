import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "react-emotion";

import { Row, Col } from "reactstrap";
import { H5Underline } from "../../../style/typography";

import colors from "../../../style/colors";
import { StyledSolidLink } from "../../../style/deco";
import { LinkButton } from "../../formData/components/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Pie from "../../components/Pie";

import ReactToPrint from "react-to-print";

import {
  income,
  housing,
  transportation,
  living,
  personal,
  savings,
  savingsG,
  totalExpenses
} from "../../formData/calculation";

const Under = styled(Col)`
  border-bottom: 1px solid ${colors.softBorder};
  margin-right: 10px;
`;

const IconBox = styled("div")`
  display: inline-block;
  text-align: center;
  width: 40px;
`;

const ColHeaders = styled(Row)`
  text-align: center;
  margin: 0 0 10px;
`;

const ContentRow = styled(Row)`
  padding: 5px 0;
`;

const TotalContentRow = styled(ContentRow)`
  font-weight: 700;
`;

const Container = styled("div")`
  border: solid ${colors.softBorder} 1px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
`;

const BudgetHeader = styled("h1")`
  padding: 25px 0;
  text-align: center;
`;

const TotalsContainer = styled(Container)`
  font-weight: 700;
`;

const darkbackground = css({
  background: colors.softBorder,
  fontWeight: "bold",
  marginRight: "5px"
});

const ValueCol = props => {
  if (typeof props.value === "number") {
    return (
      <Col className={darkbackground} xs={3} sm={3} md={3} lg={3}>
        ₹{props.value}
      </Col>
    );
  } else {
    return (
      <Col style={{ marginRight: "5px" }} xs={3} sm={3} md={3} lg={3}>
        ₹0
      </Col>
    );
  }
};

class PrintableBudget extends Component {
  render() {
    const values = this.props.values;
    return (
      <div style={{ minWidth: "1000px" }}>
        <BudgetHeader>My Budget</BudgetHeader>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="dollar-sign" />
                </IconBox>
                Monthly Income
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Wage Income</Col>
                <ValueCol value={values.wage_income} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Bi-weekly paycheck</Col>
                <ValueCol value={values.bi_weekly_paycheck} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Self Employment Income</Col>
                <ValueCol value={values.self_employment_income} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Government Benefits</Col>
                <ValueCol value={values.government_benefits} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Income</Col>
                <ValueCol value={values.other_income} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Income</Col>
                <ValueCol value={values.other_income_2} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Income</Col>
                <ValueCol value={income(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="car" />
                </IconBox>
                Transportation
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Car</Col>
                <ValueCol value={values.car} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Snowmobile or other vehicle</Col>
                <ValueCol value={values.snowmobile} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Insurance</Col>
                <ValueCol value={values.transportation_insurance} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Gas</Col>
                <ValueCol value={values.gas} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Parking</Col>
                <ValueCol value={values.parking} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Bicycle</Col>
                <ValueCol value={values.bicycle} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Public Transport</Col>
                <ValueCol value={values.public_transport} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Taxi</Col>
                <ValueCol value={values.taxi} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Transport</Col>
                <ValueCol value={values.other_transport} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Transportation</Col>
                <ValueCol value={transportation(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="user" />
                </IconBox>
                Personal
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Recreation and Entertainment</Col>
                <ValueCol value={values.recreation_entertainment} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Eating Out</Col>
                <ValueCol value={values.eating_out} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Cigarettes and Alcohol</Col>
                <ValueCol value={values.cigarettes_alcohol} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Personal Grooming</Col>
                <ValueCol value={values.personal_grooming} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Magazines and Newspapers</Col>
                <ValueCol value={values.magazines_newspapers} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Gifts and Donations</Col>
                <ValueCol value={values.gifts_donations} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Vacation and Travel</Col>
                <ValueCol value={values.vacation_travel} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Saving Goals</Col>
                <ValueCol value={values.saving_goals} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Personal Expenses</Col>
                <ValueCol value={personal(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <TotalsContainer>
              <H5Underline>Totals</H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Total Income</Col>
                <ValueCol value={income(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Expenses</Col>
                <ValueCol value={totalExpenses(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </TotalsContainer>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="home" />
                </IconBox>
                Housing
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Rent or Mortgage</Col>
                <ValueCol value={values.rent_mortgage} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Municipal taxes</Col>
                <ValueCol value={values.municipal_taxes} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Heat</Col>
                <ValueCol value={values.heat} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Hydro</Col>
                <ValueCol value={values.hydro} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Cable and Internet</Col>
                <ValueCol value={values.cable_internet} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Phone</Col>
                <ValueCol value={values.phone} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Housing</Col>
                <ValueCol value={values.other_housing} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Housing Expenses</Col>
                <ValueCol value={housing(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="walking" />
                </IconBox>
                Living
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Food</Col>
                <ValueCol value={values.food} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Clothing and Laundry</Col>
                <ValueCol value={values.clothing_laundry} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Childcare</Col>
                <ValueCol value={values.childcare} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Loan Payment</Col>
                <ValueCol value={values.loan_payment} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Credit Card</Col>
                <ValueCol value={values.credit_card} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Prescription Drugs</Col>
                <ValueCol value={values.prescription_drugs} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Pets</Col>
                <ValueCol value={values.pets} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Insurance</Col>
                <ValueCol value={values.living_insurance} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Other Living Expenses</Col>
                <ValueCol value={values.other_living_expenses} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Living Expenses</Col>
                <ValueCol value={living(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="home" />
                </IconBox>
                Savings
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Savings Goal</Col>
                <ValueCol value={values.saving_goals} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Savings Collected</Col>
                <ValueCol value={values.savings_saved} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Savings To Collect</Col>
                <ValueCol value={savings(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <Pie values={values} />
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="dollar-sign" />
                </IconBox>
                Debt
              </H5Underline>
              <ColHeaders>
                <Col />
                <Col xs={3} sm={3} md={3} lg={3}>
                  Budgeted
                </Col>
                <Col xs={3} sm={3} md={3} lg={3}>
                  Actual
                </Col>
              </ColHeaders>
              <ContentRow>
                <Col>Debt Owed</Col>
                <ValueCol value={debtO(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <ContentRow>
                <Col>Debt Repaid</Col>
                <ValueCol value={debtP(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </ContentRow>
              <TotalContentRow>
                <Col>Total Debt to Pay</Col>
                <ValueCol value={debt(values)} />
                <Under xs={3} sm={3} md={3} lg={3} />
              </TotalContentRow>
            </Container>
            <Container>
              <Pie values={values} />
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}

const ButtonBar = () => (
  <Container>
    <Row
      className="d-flex justify-content-between"
      style={{ paddingLeft: "15px" }}
    >
      <LinkButton to="/Form/review" name="PREVIOUS" />
      <ReactToPrint
        trigger={() => (
          <StyledSolidLink href="#">Print your budget!</StyledSolidLink>
        )}
        content={() => this.componentRef}
      />
    </Row>
  </Container>
);

const Budget = props => {
  return (
    <React.Fragment>
      <ButtonBar />
      <PrintableBudget
        values={props.newBudget}
        ref={el => (this.componentRef = el)}
      />
      <ButtonBar />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { newBudget: state.budgetReducer };
};

export default connect(mapStateToProps)(Budget);
