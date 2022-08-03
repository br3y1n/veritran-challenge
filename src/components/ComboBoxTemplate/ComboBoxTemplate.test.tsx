import { act, fireEvent, screen } from "@testing-library/react";
import { ComboBoxTemplateProps } from "./models";
import ComboBoxTemplate from "./ComboBoxTemplate";
import { renderWithTheme } from "../../presets/jest.utils";

const comboBoxProps: ComboBoxTemplateProps = {
  isOpen: false,
  onKeyDown: jest.fn(),
  renderLeft: () => <div data-testid={"renderLeft"} />,
  renderItems: () => <div data-testid={"renderItems"} />,
  onClick: jest.fn(),
  onClickOutside: jest.fn(),
};

describe("ComboBoxTemplate tests:", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("When ComboBoxTemplate is called, then renderLeft is rendered", () => {
    renderWithTheme(<ComboBoxTemplate {...comboBoxProps} />);
    const renderLeft = screen.getByTestId("renderLeft");
    expect(renderLeft).toBeInTheDocument();
  });

  it("When ComboBoxTemplate is called, then renderItems is rendered", () => {
    const newProps = { ...comboBoxProps, isOpen: true };
    renderWithTheme(<ComboBoxTemplate {...newProps} />);
    const renderItems = screen.getByTestId("renderItems");
    expect(renderItems).toBeInTheDocument();
  });

  it("When ComboBoxTemplate is called and isOpen is false, then renderItems isn't rendered", () => {
    renderWithTheme(<ComboBoxTemplate {...comboBoxProps} />);
    expect(() => screen.getByTestId("renderItems")).toThrow();
  });

  it("When select is clicked, then onClick is called", () => {
    renderWithTheme(<ComboBoxTemplate {...comboBoxProps} />);
    const select = screen.getByRole("button");
    expect(select).toBeInTheDocument();

    act(() => {
      fireEvent.click(select);
    });

    expect(comboBoxProps.onClick).toBeCalledTimes(1);
  });

  it("When the focus is removed from select, then onBlur is called", () => {
    renderWithTheme(<ComboBoxTemplate {...comboBoxProps} />);
    const select = screen.getByRole("button");
    expect(select).toBeInTheDocument();

    act(() => {
      fireEvent.click(select);
    });

    act(() => {
      fireEvent.mouseDown(document);
    });

    expect(comboBoxProps.onClickOutside).toBeCalledTimes(1);
  });

  it("When key is press is select, then onKeyDown is called", () => {
    renderWithTheme(<ComboBoxTemplate {...comboBoxProps} />);
    const select = screen.getByRole("button");
    expect(select).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(select);
    });

    expect(comboBoxProps.onKeyDown).toBeCalledTimes(1);
  });
});
