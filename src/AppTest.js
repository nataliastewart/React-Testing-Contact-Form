import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Type input", () => {
  //ARRANGE: Set up any test data that we want in the DOM

  //Act action that the USER does that we want to test
  //fill out the form
  //click submit button

  //ASSERT: test that the data or app responded the way you expected
  //testing that is visible for the user

  const { getByText } = render(<App />);
  const linkElement = getByText(/add new name/i);
  expect(linkElement).toBeInTheDocument();
});
