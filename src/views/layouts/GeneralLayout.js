import React from "react";

import { Col, Row } from "reactstrap";
import { Container } from "../../style/layout";

import Pie from "../components/Pie";
import { MiniBudget } from "../components/MiniBudget";

export default props => {
  let { FormPage, curForm } = props;
  return (
    <Row className="d-flex justify-content-center">
      <Col xs={12} sm={12} md={12} lg={7}>
        <Container>
          <FormPage {...props} curForm={curForm} />
        </Container>
      </Col>
      <Col xs={12} sm={12} md={12} lg={5}>
        <MiniBudget {...props} curForm={curForm} />
        <Container>
          <Pie {...props} curForm={curForm} />
        </Container>
      </Col>
    </Row>
  );
};
