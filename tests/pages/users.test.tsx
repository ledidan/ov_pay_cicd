import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../../src/pages/login/Login";

describe("Login", () => {
  it("renders a text in div", () => {
    render(<Login />);

    const loginText = screen.getByText(/Login/i)

    expect(loginText).toBeInTheDocument();
  });
});
