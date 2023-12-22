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
