//import icons from "./assets/icons.svg";
import { css } from "@emotion/react";
import { Button } from "@material-ui/core";
import { default as React } from "react";
import { i18n } from "@lingui/core";
import { Trans } from "@lingui/react";
//import { FFMpegTest } from "./FFMpegTest";

// export a react function component named App
export const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <h2 className="hero-text">This should be made red by scss.</h2>
      <h2
        css={css`
          color: green;
        `}
        //css={{ color: "green !important" }}
      >
        This should be green by emotion css prop
      </h2>
      <h2
        css={{
          color: "blue",
        }}
      >
        This should be blue from emotion with object
      </h2>
      <Button variant="outlined">Material is here</Button>
      <h2>
        Lingui test:
        <br />
        <Trans id="one" />
        <br />
        {i18n._(/*i18n*/ "two")}
        <br />
        <Trans id="not translated" />
      </h2>
      {/* <FFMpegTest /> */}
    </div>
  );
};

export default App;
