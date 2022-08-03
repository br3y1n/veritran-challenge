import { act, fireEvent, screen } from "@testing-library/react";
import ComboBoxItem from "./ComboBoxItem";
import { ComboBoxItemProps } from "./models";
import { renderWithTheme } from "../../presets/jest.utils";

const comboBoxItemProps: ComboBoxItemProps = {
  focused: false,
  option: "test1",
  onChangeOption: jest.fn(),
  selected: false,
};

describe("ComboBoxItem tests:", () => {
  it("When ComboBoxItem is called, then 1 option is rendered", () => {
    renderWithTheme(<ComboBoxItem {...comboBoxItemProps} />);

    const option = screen.getByRole("option");

    expect(option).toBeInTheDocument();
  });

  it("When ComboBoxItem is clicked, then onChangeOption is called with a option", () => {
    renderWithTheme(<ComboBoxItem {...comboBoxItemProps} />);

    const option = screen.getByRole("option");

    act(() => {
      fireEvent.click(option);
    });

    expect(comboBoxItemProps.onChangeOption).toBeCalledWith("test1");
  });
});
