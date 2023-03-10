import React from "react";
import { render } from "react-dom";
import App from "./App";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { messages as enMessages } from "../../locales/en/messages";
import { messages as esMessages } from "../../locales/es/messages";

import fs from "fs";
import { asyncInitPaths } from "./paths";

console.log("fs.existsSync:" + fs.existsSync("foo.txt"));

i18n.load({
  en: enMessages,
  es: esMessages,
});
i18n.activate("es");
asyncInitPaths().then(() => {
  render(
    <React.StrictMode>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </React.StrictMode>,
    document.getElementById("root") as HTMLElement
  );

  postMessage({ payload: "removeLoading" }, "*");
});
