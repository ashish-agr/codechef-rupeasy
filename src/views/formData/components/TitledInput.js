import React from "react";
import { FormGroup, Label, Input as RSInput, Col } from "reactstrap";

const Text = ({ name, id, type = "text", ...props }) => (
  <RSInput {...props} placeholder={name} name={id} type={type} />
);

const Number = ({ name, id, type = "text", ...props }) => (
  <RSInput {...props} placeholder={name} name={id} type={type} />
);

export default ({ TitleInput = Text, NumberInput = Number, ...props }) => (
  <FormGroup row>
    <Col>
      <Label>{props.name}</Label>
    </Col>
    <Col>
      <TitleInput {...props} />
    </Col>
    <Col>
      <NumberInput {...props} />
    </Col>
  </FormGroup>
);
