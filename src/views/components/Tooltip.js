import React from "react";
import { Tooltip as RSTooltip } from "reactstrap";

import Component from "@reactions/component";

export const Tooltip = props => {
  return (
    <Component initialState={{ toolTipOpen: false }}>
      {({ setState, state }) => {
        const toggle = () => {
          setState({
            toolTipOpen: !state.toolTipOpen
          });
        };

        return (
          <RSTooltip
            placement="right"
            isOpen={state.toolTipOpen}
            target={props.target}
            toggle={() => toggle()}
          >
            {props.text}
          </RSTooltip>
        );
      }}
    </Component>
  );
};
