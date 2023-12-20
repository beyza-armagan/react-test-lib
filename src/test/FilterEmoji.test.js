import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Search Area", () => {
  let searchText;

  // render the app component
  beforeEach(() => {
    render(<App />);
    searchText = screen.getByLabelText("inputLabel");
  });

  // search for emoji 100
  test("search value 100 should return", () => {
    const inputHundred = "100";
    userEvent.type(searchText, inputHundred);

    expect(screen.getByText(inputHundred)).toBeInTheDocument();
  });

  //search for blush emoji
  test("filter value blush should return", () => {
    const inputBlush = "Blush";
    userEvent.type(searchText, inputBlush);

    expect(screen.getByText(inputBlush)).toBeInTheDocument();
  });
});
