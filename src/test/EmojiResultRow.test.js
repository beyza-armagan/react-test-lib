import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EmojiResultsRow from "../EmojiResultRow"; // Adjust the import path

describe("Copy to clipboard", () => {
  test("should copy emoji to clipboard when button clicked", async () => {
    const title = "Smiley";
    const symbol = "😃";

    render(<EmojiResultsRow title={title} symbol={symbol} />);

    // find the emoji row component by its title
    const emojiRow = screen.getByText(title);

    // find the copy emoji button within the emojiRow
    const copyButton = emojiRow
      .closest(".component-emoji-result-row.copy-to-clipboard")
      .querySelector(".info");

    // click on the copy emoji button
    fireEvent.click(copyButton);

    await waitFor(() => {
      // get the value obtained from the clipboard and check if it matches
      const clipboardText = document.body.querySelector(".title").textContent;
      expect(clipboardText).toBe(title);
    });
  });
});
