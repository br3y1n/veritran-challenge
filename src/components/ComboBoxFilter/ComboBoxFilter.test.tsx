import { act, fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "../../presets/jest.utils";
import { KeyCodeEnum } from "../../enums";
import ComboBoxFilter from "./ComboBoxFilter";
import { ComboBoxProps } from "../ComboBox/models";

const comboBoxProps: ComboBoxProps = {
  options: ["test1", "test2", "test3"],
  onChange: jest.fn(),
};

describe("ComboBoxFilter tests:", () => {
  let select: HTMLElement;

  beforeEach(() => {
    renderWithTheme(<ComboBoxFilter {...comboBoxProps} />);

    select = screen.getByPlaceholderText(/Filter by text/i);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("When ComboBoxFilter is called, then Filter by text is rendered as placaholder", () => {
    expect(select).toBeInTheDocument();
  });

  it("When ComboBoxFilter is called, then chevron down icon is rendered", () => {
    const icon = screen.getByTestId("ChevronDown");
    expect(icon).toBeInTheDocument();
  });

  it("When ComboBoxFilter is called, then search icon is rendered", () => {
    const icon = screen.getByTestId("SearchIcon");
    expect(icon).toBeInTheDocument();
  });

  it("When ComboBoxFilter, then listitem isn't rendered", () => {
    expect(() => screen.getByRole("listitem")).toThrow();
  });

  it("When select is foccus, then listitem  and chevron up icon are rendered", () => {
    act(() => {
      fireEvent.focus(select);
    });

    const listItems = screen.getByRole("listitem");
    const icon = screen.getByTestId("ChevronUp");
    expect(listItems).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("When select a item, then onChange is called with this item", () => {
    act(() => {
      fireEvent.focus(select);
    });

    const item = screen.getByText(/test1/);

    act(() => {
      fireEvent.click(item);
    });
    expect(comboBoxProps.onChange).toBeCalledWith("test1");
  });

  it("When xxx, then listitem isn't rendered", () => {
    act(() => {
      fireEvent.keyDown(select, { code: "test" });
    });

    expect(() => screen.getByRole("listitem")).toThrow();
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

  it("When key Enter and  Escape are pressed in the select, then onChange isn't called and listitem is hidden", () => {
    act(() => {
      fireEvent.focus(select);
    });

    const listItems = screen.getByRole("listitem");
    expect(listItems).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ESCAPE });
    });

    expect(comboBoxProps.onChange).not.toBeCalled();
    expect(() => screen.getByRole("listitem")).toThrow();
  });

  it("When key Enter and Tab are pressed in the select, then onChange isn't called and listitem is hidden", () => {
    act(() => {
      fireEvent.focus(select);
    });

    const listItems = screen.getByRole("listitem");
    expect(listItems).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.TAB });
    });

    expect(comboBoxProps.onChange).not.toBeCalled();
    expect(() => screen.getByRole("listitem")).toThrow();
  });

  it("When  ArrowDown is pressed multiple times, then last item is selected", () => {
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

    const text = screen.getByText(/test3/);

    expect(text).toBeInTheDocument();
  });

  it("When  ArrowUp is pressed multiple times, then first item is selected", () => {
    act(() => {
      fireEvent.focus(select);
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_DOWN });
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

    const text = screen.getByText(/test1/);

    expect(text).toBeInTheDocument();
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
