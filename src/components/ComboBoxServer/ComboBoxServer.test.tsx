import { act, fireEvent, screen } from "@testing-library/react";
import { ComboBoxProps } from "./models";
import { renderWithTheme } from "../../presets/jest.utils";
import { KeyCodeEnum } from "../../enums";
import ComboBoxServer from "./ComboBoxServer";

const comboBoxProps: ComboBoxProps = {
  options: ["test1", "test2", "test3"],
  onChange: jest.fn(),
  onFetch: jest.fn(),
};

describe("ComboBoxServer tests:", () => {
  let select: HTMLElement;

  beforeEach(() => {
    renderWithTheme(<ComboBoxServer {...comboBoxProps} />);

    select = screen.getByPlaceholderText(/Filter by text/i);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("When ComboBoxServer is called, then Filter by text is rendered as placaholder", () => {
    expect(select).toBeInTheDocument();
  });

  it("When ComboBoxServer is called, then chevron down icon is rendered", () => {
    const icon = screen.getByTestId("ChevronDown");
    expect(icon).toBeInTheDocument();
  });

  it("When ComboBoxServer is called, then search icon is rendered", () => {
    const icon = screen.getByTestId("SearchIcon");
    expect(icon).toBeInTheDocument();
  });

  it("When ComboBoxServer, then listitem isn't rendered", () => {
    expect(() => screen.getByRole("listitem")).toThrow();
  });

  it("When select is focus and insert 3 letters, then chevron up icon is rendered and onFetch is called", () => {
    act(() => {
      fireEvent.focus(select);
    });

    act(() => {
      fireEvent.change(select, { target: { value: "ant" } });
    });

    const icon = screen.getByTestId("ChevronUp");
    expect(icon).toBeInTheDocument();
    expect(comboBoxProps.onFetch).toBeCalledTimes(1);
  });

  it("When key ArrowDown and Enter are pressed in the select, then onChange is called with item 1", () => {
    act(() => {
      fireEvent.focus(select);
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_DOWN });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    expect(comboBoxProps.onChange).toBeCalledWith("test1");
  });

  it("When key ArrowDown, ArrowDown and Enter are pressed in the select, then item 2 has selected className", () => {
    act(() => {
      fireEvent.focus(select);
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_DOWN });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_DOWN });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    act(() => {
      fireEvent.focus(select);
    });

    const item2 = screen.getByRole("option", { name: "test2" });

    expect(item2).toHaveClass("selected");
  });

  it("When ArrowUp is pressed multiple times without press arrowDown, then onChange isn't called", () => {
    act(() => {
      fireEvent.focus(select);
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_UP });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_UP });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_UP });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_UP });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    act(() => {
      fireEvent.focus(select);
    });

    expect(comboBoxProps.onChange).not.toBeCalled();
  });

  it("When exit from select without press Enter, then onChange isn't called", () => {
    act(() => {
      fireEvent.focus(select);
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_DOWN });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_DOWN });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_UP });
    });

    act(() => {
      fireEvent.blur(select);
    });

    expect(comboBoxProps.onChange).not.toBeCalled();
  });
});
