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
        Transportation Expenses
        <IconBox>
          <FontAwesomeIcon icon="car" />
        </IconBox>
      </H5Underline>
      <BasicInput
        name="Car"
        id="car"
        text="This space is for any vehicle payments and repair costs."
        value={values.car}
        onChange={handleChange}
      />
      <BasicInput
        name="Snowmobile or other vehicle"
        id="snowmobile"
        text="This space is for any snowmobile or other vehicle payments and repair costs."
        value={values.snowmobile}
        onChange={handleChange}
      />
      <BasicInput
        name="Insurance"
        id="transportation_insurance"
        text="This is for any vehicle insurance you are paying."
        value={values.transportation_insurance}
        onChange={handleChange}
      />
      <BasicInput
        name="Gas"
        id="gas"
        text="The average amount you pay for gas every month"
        value={values.gas}
        onChange={handleChange}
      />
      <BasicInput
        name="Parking"
        id="parking"
        text="Parking meter costs, parking spaces and parking tickets."
        value={values.parking}
        onChange={handleChange}
      />
      <BasicInput
        name="Bicycle"
        id="bicycle"
        text="Here you type your bicycle repair and maintenance fees."
        value={values.bicycle}
        onChange={handleChange}
      />
      <BasicInput
        name="Public transport"
        id="public_transport"
        text="This space is for bus fares and any other public transport you use."
        value={values.public_transport}
        onChange={handleChange}
      />
      <BasicInput
        name="Taxicabs"
        id="taxi"
        text="If you take taxis, then put down the average amount you spend here."
        value={values.taxi}
        onChange={handleChange}
      />
      <BasicInput
        name="Other"
        id="other_transport"
        text="An extra space for any other transport costs you are paying. :)"
        value={values.other_transport}
        onChange={handleChange}
      />
      <Row
        className="d-flex justify-content-between"
        style={{ paddingLeft: "15px" }}
      >
        <LinkButton to="/Form/housing" name="PREVIOUS" />
        <LinkButton to="/Form/living" name="NEXT" />
      </Row>
    </Form>
  );
};
