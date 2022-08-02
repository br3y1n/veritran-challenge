import { render, screen } from "@testing-library/react";
import ComboBox from "./ComboBox";

describe("ComboBox tests:", () => {
  it("When ComboBox is called, then a ComboBox text is shown", () => {
    render(<ComboBox />);

    const title = screen.getByText(/ComboBox/i);

    expect(title).toBeInTheDocument();
  });
});
