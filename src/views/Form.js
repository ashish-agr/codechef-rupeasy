import React from "react";
import Component from "@reactions/component";

import { Formik } from "formik";
import formTypes from "./formData/inputFields/index";
import { values } from "./formData/values";

import Trail from "./components/Trail";
import Budget from "./components/BudgetHtml";

import { connect } from "react-redux";
import { actions } from "../redux/index";

import { Container } from "../style/layout";
import styled from "react-emotion";

import {
  GeneralLayout,
  ReviewLayout,
  TitleLayout,
  IncomeLayout
} from "./layouts/index";

const MainContainer = styled(Container)`
  border: none;
  margin: 10px auto;
  padding: none;
`;

const Form = props => {
  let curForm = props.match.params.formType;
  let FormPage = curForm === "budget" ? null : formTypes[curForm].FormComponent;

  return (
    <Component initialState={{ modal: true }}>
      {({ setState, state }) => {
        let toggle = () => {
          setState({
            modal: !state.modal
          });
        };
        return (
          <Formik
            initialValues={values}
            onSubmit={values => {
              props.addBudget({ values });
              props.history.push("/Form/budget");
            }}
            render={({ ...props }) => {
              if (curForm === "review") {
                return (
                  <MainContainer>
                    <TitleLayout />
                    <Trail {...props} curForm={curForm} />
                    <ReviewLayout
                      {...props}
                      curForm={curForm}
                      FormPage={FormPage}
                    />
                  </MainContainer>
                );
              } else if (curForm === "income") {
                return (
                  <MainContainer>
                    <TitleLayout />
                    <Trail {...props} curForm={curForm} />
                    <IncomeLayout
                      {...props}
                      state={state}
                      toggle={toggle}
                      curForm={curForm}
                      FormPage={FormPage}
                    />
                  </MainContainer>
                );
              } else if (curForm === "budget") {
                return (
                  <MainContainer>
                    <Budget />
                  </MainContainer>
                );
              } else {
                return (
                  <MainContainer>
                    <TitleLayout />
                    <Trail {...props} curForm={curForm} />
                    <GeneralLayout
                      {...props}
                      curForm={curForm}
                      FormPage={FormPage}
                    />
                  </MainContainer>
                );
              }
            }}
          />
        );
      }}
    </Component>
  );
};

const mapStateToProps = state => {
  return { newBudget: state.budgetReducer };
};

const { addBudget } = actions;

const mapDispatchToProps = {
  addBudget
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
