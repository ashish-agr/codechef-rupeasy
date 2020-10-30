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
        Monthly Housing Expenses
        <IconBox>
          <FontAwesomeIcon icon="home" />
        </IconBox>
      </H5Underline>
      <BasicInput
        name="Rent or mortgage"
        id="rent_mortgage"
        text="Your monthly rent or mortgage payments go here."
        value={values.rent_mortgage}
        onChange={handleChange}
      />
      <BasicInput
        name="Municipal taxes"
        id="municipal_taxes"
        text="Any municipal taxes you are paying go here."
        value={values.municipal_taxes}
        onChange={handleChange}
      />
      <BasicInput
        name="Heat"
        id="heat"
        text="Figure out your average monthly heating bill and put it here. Make sure to look at summer AND winter months."
        value={values.heat}
        onChange={handleChange}
      />
      <BasicInput
        name="Hydro"
        id="hydro"
        text="Hydro-electric monthly bills go here. Remember to calculate the average monthly amount."
        value={values.hydro}
        onChange={handleChange}
      />
      <BasicInput
        name="Cable and internet"
        id="cable_internet"
        text="If you pay for cable, internet, or Netflix, then put that here."
        value={values.cable_internet}
        onChange={handleChange}
      />
      <BasicInput
        name="Telephone and cell phone"
        id="phone"
        text="Your cellphone and land-line bills go here. Make sure to include any extra fees if you go over your limits."
        value={values.phone}
        onChange={handleChange}
      />
      <BasicInput
        name="Other"
        id="other_housing"
        text="Just an extra space for any other expenses related to your housing."
        value={values.other_housing}
        onChange={handleChange}
      />
      <Row
        className="d-flex justify-content-between"
        style={{ paddingLeft: "15px" }}
      >
        <LinkButton to="/Form/income" name="PREVIOUS" />
        <LinkButton to="/Form/transportation" name="NEXT" />
      </Row>
    </Form>
  );
};
