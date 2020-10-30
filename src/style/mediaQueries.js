import { css } from "emotion";
import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const mqFp = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

export const TrailFontSizes = css(
  mqFp({ fontSize: ["14px", "14px", "12px", "16px"] })
);

export const ComponentFontSizes = css(
  mqFp({ fontSize: ["10px", "12px", "13px", "14px"] })
);

export const ButtonFontSizes = css(
  mqFp({ fontSize: ["10px", "12px", "14px", "16px"] })
);

export const TrailTextMq = css(
  mqFp({ display: ["none", "none", "inline-block"] })
);

export const component100 = css({
  [mq[2]]: {
    minWidth: "10%"
  }
});

export const reverseCol = css(
  mqFp({
    flexDirection: ["reverse-column", "reverse-column", "reverse-column", "row"]
  })
);
