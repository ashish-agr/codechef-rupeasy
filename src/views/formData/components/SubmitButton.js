import React from "react";

import { StyledSolidLink } from "../../../style/deco";

export default ({ name, href, target, handleSubmit }) => {
  return (
    <StyledSolidLink
      href={href}
      target={target}
      onClick={values => handleSubmit(values)}
    >
      {name}
    </StyledSolidLink>
  );
};
