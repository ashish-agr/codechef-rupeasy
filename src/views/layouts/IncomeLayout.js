import React from "react";
import styled from "react-emotion";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row
} from "reactstrap";

import { MiniBudget } from "../components/MiniBudget";
import Pie from "../components/Pie";
import { Tooltip } from "../components/Tooltip";

import { Container } from "../../style/layout";
import { StyledButton } from "../../style/deco";
import colors from "../../style/colors";

import help from "../../assets/help.svg";

const Question = styled("img")`
  height: 20px;
  width: 20px;
  margin: 2px;
`;

export default props => {
  let { FormPage, curForm, state, toggle } = props;

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
      <Modal isOpen={state.modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>
          Welcome to RupEasy!
        </ModalHeader>
        <ModalBody>
          <p>
            The <strong>RupEasy</strong> can
            be used to create a single-page, printable budget. The printed
            budget can also be used to write down and compare the actual amounts
            to the budgeted amount.
          </p>
          <p>
            <strong>How to use it: </strong>
            Fill out boxes that apply to you and to the best of your knowledge.
            When you've filled out all your applicable information, go on the
            review tab, click the "View Full Budget" where you can print your
            budget.
          </p>
          <p>
            If you're uncertain about what something means, hover your mouse
            pointer over the{" "}
            {<Question src={help} alt="Question Mark Icon" id={"test"} />} to
            get more information.
          </p>
          <Container borderColor={colors.red}>
            <strong style={{ color: "red" }}>
              PRIVACY NOTE: None of the information you type into the budgeting
              tool is saved anywhere. It disappears when you close the browser
              window.
            </strong>
          </Container>
          <p>
            When you have filled out everything that applies to you, click the
            "NEXT" button to go to the next page. Eventually, you will have the
            option to print your budget.
          </p>
          <Tooltip target={"test"} text={"Aren't I helpful? 🙂"} />
        </ModalBody>
      </Modal>
    </Row>
  );
};
