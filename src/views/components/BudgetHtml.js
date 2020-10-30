import React, { Component } from "react";
import { connect } from "react-redux";

import { Row, Col } from "reactstrap";
import { H5Underline } from "../../style/typography";

import { StyledSolidLink } from "../../style/deco";
import { LinkButton } from "../formData/components/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Pie from "./Pie";

import ReactToPrint from "react-to-print";

import {
  Under,
  IconBox,
  ColHeaders,
  ContentRow,
  TotalContentRow,
  Container,
  BudgetHeader,
  TotalsContainer,
  darkbackground
} from "./budgetHtmlStyles";

import {
  income,
  housing,
  transportation,
  living,
  personal,
  savings,
  savingsG,
  totalExpenses,
  debt,
  debtO,
  debtP
} from "../formData/calculation";

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

const BudgetItem = props => (
  <ContentRow>
    <Col>{props.title}</Col>
    <ValueCol value={props.value} />
    <Under xs={3} sm={3} md={3} lg={3} />
  </ContentRow>
);

const BudgetTotal = props => (
  <TotalContentRow>
    <Col>{props.title}</Col>
    <ValueCol value={props.value} />
    <Under xs={3} sm={3} md={3} lg={3} />
  </TotalContentRow>
);

class PrintableBudget extends Component {
  render() {
    const values = this.props.values;
    console.log(
      "biweek",
      typeof values.bi_weekly_paycheck,
      typeof values.wage_income
    );
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
              <BudgetItem title={"Wage Income"} value={values.wage_income} />
              <BudgetItem
                title={"Bi-weekly Paycheck"}
                value={values.bi_weekly_paycheck}
              />
              <BudgetItem
                title={"Self Employment Income"}
                value={values.self_employment_income}
              />
              <BudgetItem
                title={"Government Benefits"}
                value={values.government_benefits}
              />
              <BudgetItem title={"Other Income"} value={values.other_income} />
              <BudgetItem
                title={"Other Income"}
                value={values.other_income_2}
              />

              <BudgetTotal title={"Total Income"} value={income(values)} />
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="car" />
                </IconBox>
                Monthly Transportation Expenses
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
              <BudgetItem title={"Car"} value={values.car} />
              <BudgetItem
                title={"Snowmobile or Other vehicle"}
                value={values.snowmobile}
              />
              <BudgetItem
                title={"Insurance"}
                value={values.transportation_insurance}
              />
              <BudgetItem title={"Gas"} value={values.gas} />
              <BudgetItem title={"Parking"} value={values.parking} />
              <BudgetItem title={"Bicycle"} value={values.bicycle} />
              <BudgetItem
                title={"Public Transport"}
                value={values.public_transport}
              />
              <BudgetItem title={"Taxi"} value={values.taxi} />
              <BudgetItem
                title={"Other Transport"}
                value={values.other_transport}
              />
              <BudgetTotal
                title={"Total Transportation"}
                value={transportation(values)}
              />
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="user" />
                </IconBox>
                Monthly Personal Expenses
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
              <BudgetItem
                title={"Recreation and Entertainment"}
                value={values.recreation_entertainment}
              />
              <BudgetItem title={"Eating Out"} value={values.eating_out} />
              <BudgetItem
                title={"Cigaretted and Alcohol"}
                value={values.cigarettes_alcohol}
              />
              <BudgetItem
                title={"Personal Grooming"}
                value={values.personal_grooming}
              />
              <BudgetItem
                title={"Magazines and Newspapers"}
                value={values.magazines_newspapers}
              />
              <BudgetItem
                title={"Gifts and Donations"}
                value={values.gifts_donations}
              />
              <BudgetItem
                title={"Vacation and Travel"}
                value={values.vacation_travel}
              />
              <BudgetItem title={"Saving Goals"} value={values.saving_goals} />
              <BudgetTotal
                title={"Total Personal Expenses"}
                value={personal(values)}
              />
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
              <BudgetTotal title={"Total Income"} value={income(values)} />
              <BudgetTotal
                title={"Total Expenses"}
                value={totalExpenses(values)}
              />
            </TotalsContainer>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6}>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="home" />
                </IconBox>
                Monthly Housing Expenses
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
              <BudgetItem
                title={"Rent or Mortgage"}
                value={values.rent_mortgage}
              />
              <BudgetItem
                title={"Municipal Taxes"}
                value={values.municipal_taxes}
              />
              <BudgetItem title={"Heat"} value={values.heat} />
              <BudgetItem title={"Hydro"} value={values.hydro} />
              <BudgetItem
                title={"Cable and Internet"}
                value={values.cable_internet}
              />
              <BudgetItem title={"Phone"} value={values.phone} />
              <BudgetItem
                title={"Other Housing"}
                value={values.other_housing}
              />
              <BudgetTotal
                title={"Total Housing Expenses"}
                value={housing(values)}
              />
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="dollar-sign" />
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
              <BudgetItem title={"Savings Goal"} value={values.saving_goal} />
              <BudgetItem
                title={"Savings Collected"} value={values.savings_saved}
              />
              <BudgetTotal
                title={"Savings To Collect"}
                value={savings(values)}
              />
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
              <BudgetItem title={"Debt Owed"} value={debtO(values)} />
              <BudgetItem
                title={"Debt Paid"} value={debtP(values)}
              />
              <BudgetTotal
                title={"Debt to be Paid"}
                value={debt(values)}
              />
            </Container>
            <Container>
              <H5Underline>
                <IconBox>
                  <FontAwesomeIcon icon="walking" />
                </IconBox>
                Monthly Living Expenses
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
              <BudgetItem title={"Food"} value={values.food} />
              <BudgetItem
                title={"Clothing and Laundry"}
                value={values.clothing_laundry}
              />
              <BudgetItem title={"Childcare"} value={values.childcare} />
              <BudgetItem title={"Loan Payment"} value={values.loan_payment} />
              <BudgetItem title={"Credit Card"} value={values.credit_card} />
              <BudgetItem
                title={"Prescription Drugs"}
                value={values.prescription_drugs}
              />
              <BudgetItem title={"Pets"} value={values.pets} />
              <BudgetItem title={"Insurance"} value={values.living_insurance} />
              <BudgetItem
                title={"Other Living Expenses"}
                value={values.other_living_expenses}
              />
              <BudgetTotal
                title={"Total Living Expenses"}
                value={living(values)}
              />
            </Container>
            <Container>
              <Pie values={values} />
            </Container>
            <Container>
              <Col>
                <em>Budgeting tip:</em> Use the empty spaces under{" "}
                <strong>Actual</strong> to write down the amounts you actually
                spend on every category. This will help with future budgets!
              </Col>
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
