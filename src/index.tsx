import React, { ComponentProps } from "react";
import { render } from "react-dom";
import App from "./components/page/App/App.page";
import { MainRoute } from "./router/Router";

const Index: React.FC = () => {
  return (
    <React.Fragment>
      <MainRoute />
    </React.Fragment>
  );
};

render(<Index />, document.getElementById("root"));
