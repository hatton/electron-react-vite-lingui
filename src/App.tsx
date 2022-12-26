//import icons from "./assets/icons.svg";
import { css } from "@emotion/react";
import { Button } from "@material-ui/core";
import { default as React, useState, useEffect } from "react";

// a codemod that adds an id attribute to all <Trans> elements

import { i18n } from "@lingui/core";
import { Trans } from "@lingui/react";

// export a react function component named App
export const App: React.FunctionComponent = () => {
  return (
    <div className="container">
      <h2 className="hero-text">This should be made red by scss.</h2>
      <h2
        css={{
          color: "green",
        }}
        //css={{ color: "green !important"}}
      >
        This should be made green by emotion.
      </h2>
      <Button variant="outlined">Material is here</Button>
      <p className="hero-tagline">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <h2>
        Lingui test:
        <br />
        <Trans id="one" />
        <br />
        {i18n._(/*i18n*/ "two")}
        <br />
        <Trans id="not translated" />
      </h2>

      <div className="links">
        <div className="link-item">
          <a
            target="_blank"
            href="https://evite.netlify.app"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        <div className="link-item link-dot">•</div>
        <div className="link-item">
          <a
            target="_blank"
            href="https://github.com/alex8088/electron-vite"
            rel="noopener noreferrer"
          >
            Getting Help
          </a>
        </div>
        <div className="link-item link-dot">•</div>
        <div className="link-item">
          <a
            target="_blank"
            href="https://github.com/alex8088/quick-start/tree/master/packages/create-electron"
            rel="noopener noreferrer"
          >
            create-electron
          </a>
        </div>
      </div>

      <div className="features">
        <div className="feature-item">
          <article>
            <h2 className="title">Configuring</h2>
            <p className="detail">
              Config with <span>electron.vite.config.ts</span> and refer to the{" "}
              <a
                target="_blank"
                href="https://evite.netlify.app/config/"
                rel="noopener noreferrer"
              >
                config guide
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">HMR</h2>
            <p className="detail">
              Edit <span>src/renderer</span> files to test HMR. See{" "}
              <a
                target="_blank"
                href="https://evite.netlify.app/guide/hmr-in-renderer.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Hot Reloading</h2>
            <p className="detail">
              Run{" "}
              <span>
                {"'"}electron-vite dev --watch{"'"}
              </span>{" "}
              to enable. See{" "}
              <a
                target="_blank"
                href="https://evite.netlify.app/guide/hot-reloading.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Debugging</h2>
            <p className="detail">
              Check out <span>.vscode/launch.json</span>. See{" "}
              <a
                target="_blank"
                href="https://evite.netlify.app/guide/debugging.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Source Code Protection</h2>
            <p className="detail">
              Supported via built-in plugin <span>bytecodePlugin</span>. See{" "}
              <a
                target="_blank"
                href="https://evite.netlify.app/guide/source-code-protection.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Packaging</h2>
            <p className="detail">
              Use{" "}
              <a
                target="_blank"
                href="https://www.electron.build"
                rel="noopener noreferrer"
              >
                electron-builder
              </a>{" "}
              and pre-configured to pack your app.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default App;
