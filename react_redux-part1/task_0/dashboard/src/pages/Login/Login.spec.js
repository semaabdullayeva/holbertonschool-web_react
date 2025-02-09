import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("logIn is called with email and password when form is submitted", () => {
  const logIn = jest.fn();
  const { getByLabelText, getByText } = render(<Login logIn={logIn} />);

  fireEvent.change(getByLabelText(/email/i), { target: { value: "test@test.com" } });
  fireEvent.change(getByLabelText(/password/i), { target: { value: "password123" } });
  fireEvent.click(getByText(/log in/i));

  expect(logIn).toHaveBeenCalledWith("test@test.com", "password123");
});
