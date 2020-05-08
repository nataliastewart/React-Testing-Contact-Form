import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

// TEST 01
test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

//TEST 02
test("form can be filled in and submitted ", () => {
  //arrange
  const { getByPlaceholderText, getByText } = render(<ContactForm />);

  //act -target- query
  const firstnameInput = getByPlaceholderText(/Edd/i);
  const lastnameInput = getByPlaceholderText(/Burke/i);
  // const emailInput = getByPlaceholderText(/bluebill1049@hotmail.com/i);
  //   const messageInput = getByText(/message/i);

  //assert - what to expect // we need fireEvent on these inputs to test - typing into the input
  fireEvent.change(firstnameInput, { target: { value: "Edd" } });
  fireEvent.change(lastnameInput, { target: { value: "Burke" } });
  // fireEvent.change(emailInput, {
  //   target: { value: "bluebill1049@hotmail.com" },
  //   });
  //   fireEvent.change(messageInput, { target: { value: "testing" } });
});

// TEST 03
test("renders without errors", async () => {
  const { getByDisplayValue, getByRole } = render(<ContactForm />);
  const submitBtn = getByRole("button", { name: /submit/i });

  fireEvent.click(submitBtn);
});
