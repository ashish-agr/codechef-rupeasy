import React from "react";

import { Col, Row } from "reactstrap";
import { Container } from "../../style/layout";
import { H5Underline } from "../../style/typography";

import Pie from "../components/Pie";
import { MiniBudget } from "../components/MiniBudget";

export default props => {
  let { FormPage, curForm } = props;
  return (
    <Col className="justify-content-center">
      <Row>
        <Container>
          <FormPage {...props} curForm={curForm} />
        </Container>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={5}>
          <MiniBudget {...props} curForm={curForm} />
        </Col>
        <Col xs={12} sm={12} md={12} lg={7}>
          <Container>
            <H5Underline>Monthly Budget Review</H5Underline>
            <Pie {...props} curForm={curForm} />
          </Container>
        </Col>
      </Row>
    </Col>
  );
};
