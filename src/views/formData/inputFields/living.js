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
        Monthly Living Expenses
        <IconBox>
          <FontAwesomeIcon icon="walking" />
        </IconBox>
      </H5Underline>
      <BasicInput
        name="Food"
        id="food"
        text="The amount that you will spend on groceries in a month. This space is NOT for the amount you spend eating out."
        value={values.food}
        onChange={handleChange}
      />
      <BasicInput
        name="Clothing and laundry"
        id="clothing_laundry"
        text="This space is for the cost of clothing, and cleaning clothing."
        value={values.clothing_laundry}
        onChange={handleChange}
      />
      <BasicInput
        name="Childcare"
        id="childcare"
        text="If you pay for childcare, then put that amount here."
        value={values.childcare}
        onChange={handleChange}
      />
      <BasicInput
        name="Loan payment"
        id="loan_payment"
        text="A space for any loans you are paying back."
        value={values.loan_payment}
        onChange={handleChange}
      />
      <BasicInput
        name="Credit card payments"
        id="credit_card"
        text="This is where you put your credit card fees. They can be late fees or interest payments."
        value={values.credit_card}
        onChange={handleChange}
      />
      <BasicInput
        name="Prescription drugs"
        id="prescription_drugs"
        text="If you take prescription drugs, then put those costs here."
        value={values.prescription_drugs}
        onChange={handleChange}
      />
      <BasicInput
        name="Pets"
        id="pets"
        text="This is for pet food, veterinarian costs, and any money you spend on your pets."
        value={values.pets}
        onChange={handleChange}
      />
      <BasicInput
        name="Insurance"
        id="living_insurance"
        text="This is for any health or other personal insurance you are paying."
        value={values.living_insurance}
        onChange={handleChange}
      />
      <BasicInput
        name="Other"
        id="other_living_expenses"
        text="An extra space for any other living expenses you have! :)"
        value={values.other_living_expenses}
        onChange={handleChange}
      />
      <Row
        className="d-flex justify-content-between"
        style={{ paddingLeft: "15px" }}
      >
        <LinkButton to="/Form/transportation" name="PREVIOUS" />
        <LinkButton to="/Form/personal" name="NEXT" />
      </Row>
    </Form>
  );
};
