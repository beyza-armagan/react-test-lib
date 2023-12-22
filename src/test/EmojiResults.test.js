import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("render emoji list", () => {
  // test if the emoji list is rendered successfully
  test("renders the emoji list on initial load", () => {
    render(<App />);
    const emojiListElement = screen.getByClassName("component-emoji-results");
    expect(emojiListElement).toBeInTheDocument();
  });
});
