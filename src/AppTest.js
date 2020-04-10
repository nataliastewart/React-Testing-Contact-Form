import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Type input", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/add new name/i);
  expect(linkElement).toBeInTheDocument();
});
