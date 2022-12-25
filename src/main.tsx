import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./samples/node-api";
import "styles/index.css";
import fs from "fs";
console.log("fs.existsSync:" + fs.existsSync("foo.txt"));
render(
  <React.StrictMode>
    {/* <I18nProvider i18n={i18n}> */}
    <App />
    {/* </I18nProvider> */}
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);

postMessage({ payload: "removeLoading" }, "*");
