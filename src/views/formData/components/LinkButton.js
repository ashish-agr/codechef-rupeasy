import React from "react";
import { Link } from "react-router-dom";

import { StyledButton } from "../../../style/deco";

export default ({ to, name }) => {
  return (
    <Link to={to}>
      <StyledButton name={name}>{name}</StyledButton>
    </Link>
  );
};
