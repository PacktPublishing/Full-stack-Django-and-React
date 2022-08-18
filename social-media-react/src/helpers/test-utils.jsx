import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

function render(ui, { ...renderOptions } = {}) {
  const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };
