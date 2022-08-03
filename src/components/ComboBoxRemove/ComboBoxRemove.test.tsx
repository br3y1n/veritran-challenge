import { act, fireEvent, screen } from "@testing-library/react";
import { ComboBoxProps } from "./models";
import { renderWithTheme } from "../../presets/jest.utils";
import { KeyCodeEnum } from "../../enums";
import ComboBoxRemove from "./ComboBoxRemove";

const comboBoxProps: ComboBoxProps = {
  options: ["test1", "test2", "test3"],
  onChange: jest.fn(),
};

describe("ComboBoxRemove tests:", () => {
  let select: HTMLElement;

  beforeEach(() => {
    renderWithTheme(<ComboBoxRemove {...comboBoxProps} />);

    select = screen.getByRole("button");
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("When ComboBoxRemove is called, then select an item message is rendered", () => {
    const text = screen.getByText(/Select an item/i);
    expect(text).toBeInTheDocument();
  });

  it("When ComboBoxRemove is called, then chevron down icon is rendered", () => {
    const icon = screen.getByTestId("ChevronDown");
    expect(icon).toBeInTheDocument();
  });

  it("When ComboBoxRemove, then listitem isn't rendered", () => {
    expect(() => screen.getByRole("listitem")).toThrow();
  });

  it("When select is clicked, then listitem  and chevron up icon are rendered", () => {
    act(() => {
      fireEvent.click(select);
    });

    const listItems = screen.getByRole("listitem");
    const icon = screen.getByTestId("ChevronUp");
    expect(listItems).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it("When select a item, then onChange is called with this item and X Icon is shown", () => {
    act(() => {
      fireEvent.click(select);
    });

    const item = screen.getByText(/test1/);

    act(() => {
      fireEvent.click(item);
    });

    const icon = screen.getByTestId("CloseIcon");
    expect(icon).toBeInTheDocument();
    expect(comboBoxProps.onChange).toBeCalledWith("test1");
  });

  it("When X Icon is clicked, then Select an item is shown and onChange is called with null", () => {
    act(() => {
      fireEvent.click(select);
    });

    const item = screen.getByText(/test1/);

    act(() => {
      fireEvent.click(item);
    });

    const icon = screen.getByTestId("CloseIcon");

    act(() => {
      fireEvent.click(icon);
    });

    const text = screen.getByText(/Select an item/i);
    expect(text).toBeInTheDocument();
    expect(comboBoxProps.onChange).toBeCalledWith(null);
  });

  it("When key Enter is pressed in the select, then listitem is rendered", () => {
    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    const listItems = screen.getByRole("listitem");
    expect(listItems).toBeInTheDocument();
  });

  it("When other key is pressed in the select, then listitem isn't rendered", () => {
    act(() => {
      fireEvent.keyDown(select, { code: "test" });
    });

    expect(() => screen.getByRole("listitem")).toThrow();
  });

  it("When key Enter, ArrowDown and Enter are pressed in the select, then onChange is called with item 2", () => {
    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_DOWN });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    expect(comboBoxProps.onChange).toBeCalledWith("test2");
  });

  it("When key Enter, ArrowDown, Enter and Enter are pressed in the select, then item 2 has selected className", () => {
    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ARROW_DOWN });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    const item2 = screen.getByRole("option", { name: "test2" });

    expect(item2).toHaveClass("selected");
  });

  it("When key Enter and  Escape are pressed in the select, then onChange isn't called and listitem is hidden", () => {
    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
    });

    const listItems = screen.getByRole("listitem");
    expect(listItems).toBeInTheDocument();

    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ESCAPE });
    });

    expect(comboBoxProps.onChange).not.toBeCalled();
    expect(() => screen.getByRole("listitem")).toThrow();
  });

  it("When  ArrowDowm is pressed multiple times, then last item is selected", () => {
    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
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

    const text = screen.getByText(/test3/);

    expect(text).toBeInTheDocument();
  });

  it("When  ArrowUp is pressed multiple times, then first item is selected", () => {
    act(() => {
      fireEvent.keyDown(select, { code: KeyCodeEnum.ENTER });
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

    const text = screen.getByText(/test1/);

    expect(text).toBeInTheDocument();
  });
});
