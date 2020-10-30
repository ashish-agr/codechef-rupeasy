import React from "react";

import { Form, Row } from "reactstrap";

import { BasicInput, LinkButton } from "../components/index";
import { H5Underline } from "../../../style/typography";
import { IconBox } from "../../../style/layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <Form>
      <H5Underline>
        Debt
        <IconBox>
          <FontAwesomeIcon icon="dollar-sign" />
        </IconBox>
      </H5Underline>
      <BasicInput
        name="Credit Card 1 Debt Owed"
        id="debt_owedcc1"
        text="This space is for your owed first credit card debt."
        value={values.debt_owedcc1}
        onChange={handleChange}
      />
      <BasicInput
        name="Credit Card 1 Debt Paid"
        id="debt_paidcc1"
        text="This space is for your paid first credit card debt."
        value={values.debt_paidcc1}
        onChange={handleChange}
      />
      <BasicInput
        name="Credit Card 2 Debt Owed"
        id="debt_owedcc2"
        text="This space is for your owed second credit card debt."
        value={values.debt_owedcc2}
        onChange={handleChange}
      />
      <BasicInput
        name="Credit Card 2 Debt Paid"
        id="debt_paidcc2"
        text="This space is for your paid second credit card debt."
        value={values.debt_paidcc2}
        onChange={handleChange}
      />
      <BasicInput
        name="Car Loan Debt Owed"
        id="debt_owedcl"
        text="This space is for your owed car loan debt."
        value={values.debt_owedcl}
        onChange={handleChange}
      />
      <BasicInput
        name="Car Loan Debt Paid"
        id="debt_paidcl"
        text="This space is for your paid car loan debt."
        value={values.debt_paidcl}
        onChange={handleChange}
      />
      <BasicInput
        name="Home Loan Debt Owed"
        id="debt_owedhl"
        text="This space is for your owed home loan debt."
        value={values.debt_owedhl}
        onChange={handleChange}
      />
      <BasicInput
        name="Home Loan Debt Paid"
        id="debt_paidhl"
        text="This space is for your paid home loan debt."
        value={values.debt_paidhl}
        onChange={handleChange}
      />
      <Row
        className="d-flex justify-content-between"
        style={{ paddingLeft: "15px" }}
      >
        <LinkButton to="/Form/savings" name="PREVIOUS" />
        <LinkButton to="/Form/review" name="NEXT" />
      </Row>
    </Form>
  );
};
