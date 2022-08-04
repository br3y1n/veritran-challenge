import { act, fireEvent, screen } from "@testing-library/react";
import { ComboBoxItemsContainerProps } from "./models";
import { renderWithTheme } from "../../presets/jest.utils";
import ComboBoxItemsContainer from "./ComboBoxItemsContainer";

const comboBoxItemsContainer: ComboBoxItemsContainerProps = {
  options: [
    { option: "test1", focused: false, selected: false },
    { option: "test2", focused: false, selected: false },
    { option: "test3", focused: false, selected: false },
  ],
  onChangeOption: jest.fn(),
};

describe("ComboBoxItemsContainer tests:", () => {
  it("When ComboBoxItemsContainer is called, then 3 options are rendered", () => {
    renderWithTheme(<ComboBoxItemsContainer {...comboBoxItemsContainer} />);

    const option = screen.getAllByRole("option");

    expect(option).toHaveLength(3);
  });

  it("When options are empty, then no matches found text is rendered", () => {
    const newProps = { ...comboBoxItemsContainer, options: [] };
    renderWithTheme(<ComboBoxItemsContainer {...newProps} />);

    const text = screen.getByText(/no matches found/i);

    expect(text).toBeInTheDocument();
  });

  it("When a option is clicked, then onChangeOption is called with a option", () => {
    renderWithTheme(<ComboBoxItemsContainer {...comboBoxItemsContainer} />);

    const option = screen.getByRole("option", { name: "test3" });

    act(() => {
      fireEvent.click(option);
    });

    expect(comboBoxItemsContainer.onChangeOption).toBeCalledWith("test3");
  });
});
