import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("render the header", () => {

  beforeEach(() => {
    render(<App />);
  });

  // test if the title is rendered successfully
  test("renders the title", () => {
    const titleElement = screen.getByText("Emoji Search");
    expect(titleElement).toBeInTheDocument();
  });

});
