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
        Monthly Personal Expenses
        <IconBox>
          <FontAwesomeIcon icon="user" />
        </IconBox>
      </H5Underline>
      <BasicInput
        name="Recreation and entertainment"
        id="recreation_entertainment"
        text="This is for the costs of at live shows, movies, festivals, parties, gym memberships and any other activities you do for fun."
        value={values.recreation_entertainment}
        onChange={handleChange}
      />
      <BasicInput
        name="Eating out"
        id="eating_out"
        text="This is for any money you spend on food that isn't your groceries."
        value={values.eating_out}
        onChange={handleChange}
      />
      <BasicInput
        name="Cigarettes and alcohol"
        id="cigarettes_alcohol"
        text="If you are spending money on cigarettes and alcohol, type the average monthly amount you'd spend here."
        value={values.cigarettes_alcohol}
        onChange={handleChange}
      />
      <BasicInput
        name="Personal grooming"
        id="personal_grooming"
        text="This space is for haircuts, hygiene products, and any other costs related to being clean and looking good. ;) (but not clothing)"
        value={values.personal_grooming}
        onChange={handleChange}
      />
      <BasicInput
        name="Magazines and newspapers"
        id="magazines_newspapers"
        text="For any magazines or newspapers you purchase."
        value={values.magazines_newspapers}
        onChange={handleChange}
      />
      <BasicInput
        name="Gifts and donations"
        id="gifts_donations"
        text="This is for the money you spend of any gifts you give, on average, in a month."
        value={values.gifts_donations}
        onChange={handleChange}
      />
      <BasicInput
        name="Vacation and travel"
        id="vacation_travel"
        text="If you take trips (even short ones) make sure to mark down how much the average amount you spend in a month."
        value={values.vacation_travel}
        onChange={handleChange}
      />
      <BasicInput
        name="Additional saving goals"
        id="saving_goals"
        text="If you have monthly saving goals, then put down that number here."
        value={values.saving_goals}
        onChange={handleChange}
      />
      <Row
        className="d-flex justify-content-between"
        style={{ paddingLeft: "15px" }}
      >
        <LinkButton to="/Form/living" name="PREVIOUS" />
        <LinkButton to="/Form/savings" name="NEXT" />
      </Row>
    </Form>
  );
};
