import React from "react";

import { Form, Row } from "reactstrap";

import { LinkButton, SubmitButton } from "../components/index";

export const FormComponent = ({
  values,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <Form>
      <Row
        className="d-flex justify-content-between"
        style={{ paddingLeft: "15px" }}
      >
        <LinkButton to="/Form/personal" name="PREVIOUS" />
        <SubmitButton
          target="_blank"
          href="http://www.yukonliteracy.com/"
          handleSubmit={handleSubmit}
          name="View the Full Budget!"
          values={values}
        />
      </Row>
    </Form>
  );
};
