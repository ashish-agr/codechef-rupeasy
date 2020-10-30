import React from "react";
import { Link } from "react-router-dom";

import { Progress as RSProgress } from "reactstrap";
import styled from "react-emotion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import colors from "../../style/colors";

import { TrailFontSizes, TrailTextMq } from "../../style/mediaQueries";

const StyledLink = styled(Link)`
  color: white;
  padding: 0 5px;
  transition: all 0.2s;
  ${TrailFontSizes};
  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const Progress = styled(RSProgress)`
  height: 30px;
  background-color: ${props => props.color};
`;

const MainProgress = styled(Progress)`
  margin: 20px 0;
`;

const TrailText = styled("span")`
  ${TrailTextMq};
`;

const IconBox = styled("div")`
  display: inline-block;
  width: 30px;
`;

export default props => {
  const curForm = props.curForm;

  const identifier = (curForm, formName) => {
    if (curForm === formName) {
      return "progress-bar-striped progress-bar-animated";
    } else {
      return null;
    }
  };

  return (
    <MainProgress multi>
      <Progress
        className={identifier(curForm, "review")}
        bar
        color={colors.color6}
        value="20"
      >
        <StyledLink to="/Form/review">
          <TrailText>Review </TrailText>
          <IconBox>
            <FontAwesomeIcon icon="chart-pie" />
          </IconBox>
        </StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "income")}
        bar
        color={colors.color1}
        value="20"
      >
        <StyledLink to="/Form/income">
          <TrailText>Income </TrailText>
          <IconBox>
            <FontAwesomeIcon icon="dollar-sign" />
          </IconBox>
        </StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "housing")}
        bar
        color={colors.color2}
        value="20"
      >
        <StyledLink to="/Form/housing">
          <TrailText>Housing </TrailText>
          <IconBox>
            <FontAwesomeIcon icon="home" />
          </IconBox>
        </StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "transportation")}
        bar
        color={colors.color3}
        value="20"
      >
        <StyledLink to="/Form/transportation">
          <TrailText>Transport </TrailText>
          <IconBox>
            <FontAwesomeIcon icon="car" />
          </IconBox>
        </StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "living")}
        bar
        color={colors.color4}
        value="20"
      >
        <StyledLink to="/Form/living">
          <TrailText>Living </TrailText>
          <IconBox>
            <FontAwesomeIcon icon="walking" />
          </IconBox>
        </StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "personal")}
        bar
        color={colors.color5}
        value="20"
      >
        <StyledLink to="/Form/personal">
          <TrailText>Personal </TrailText>
          <IconBox>
            <FontAwesomeIcon icon="user" />
          </IconBox>
        </StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "savings")}
        bar
        color={colors.colors}
        value="20"
      >
        <StyledLink to="/Form/savings">
          <TrailText>Savings </TrailText>
          <IconBox>
            <FontAwesomeIcon icon="dollar-sign" />
          </IconBox>
        </StyledLink>
      </Progress>
      <Progress
        className={identifier(curForm, "debt")}
        bar
        color={colors.colorc}
        value="20"
      >
        <StyledLink to="/Form/debt">
          <TrailText>Debt </TrailText>
          <IconBox>
            <FontAwesomeIcon icon="dollar-sign" />
          </IconBox>
        </StyledLink>
      </Progress>
    </MainProgress>
  );
};
