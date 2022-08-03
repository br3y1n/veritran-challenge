import { screen } from "@testing-library/react";
import Chevron from "./Chevron";
import { renderWithTheme } from "../../presets/jest.utils";

describe("Chevron tests:", () => {
  it("When Chevron is called with isOpen true, then ChevronUp.svg is render", () => {
    renderWithTheme(<Chevron isUp={true} />);
    const icon = screen.getByTestId("ChevronUp");
    expect(icon).toBeInTheDocument();
  });

  it("When Chevron is called with isOpen false, then ChevronDown.svg is render", () => {
    renderWithTheme(<Chevron isUp={false} />);
    const icon = screen.getByTestId("ChevronDown");
    expect(icon).toBeInTheDocument();
  });
});
