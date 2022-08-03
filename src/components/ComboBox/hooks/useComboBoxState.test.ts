import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { ComboBoxProps, UseComboBoxStateResponse } from "../models";
import { useComboBoxState } from "./useComboBoxState";
import { KeyCodeEnum } from "../../../enums";

const comboBoxProps: ComboBoxProps = {
  options: ["test1", "test2", "test3"],
  onChange: jest.fn(),
};

describe("useComboBoxState tests:", () => {
  let response: RenderHookResult<UseComboBoxStateResponse, unknown>;

  beforeEach(() => {
    response = renderHook(() => useComboBoxState(comboBoxProps));
  });

  it("When it is called, then it return a initial state", () => {
    expect(response.result.current).toEqual({
      closeMenu: expect.anything(),
      isOpen: false,
      isSelected: false,
      onChangeOption: expect.anything(),
      onKeyDown: expect.anything(),
      optionsMapped: [
        {
          focused: true,
          option: "test1",
          selected: false,
        },
        {
          focused: false,
          option: "test2",
          selected: false,
        },
        {
          focused: false,
          option: "test3",
          selected: false,
        },
      ],
      toggleMenu: expect.anything(),
    });
  });

  it("When toggleMenu is  called, then isOpen is true", () => {
    act(() => {
      response.result.current.toggleMenu();
    });

    expect(response.result.current.isOpen).toEqual(true);
  });

  it("When toggleMenu is  called two times, then isOpen is false", () => {
    act(() => {
      response.result.current.toggleMenu();
    });

    expect(response.result.current.isOpen).toEqual(true);

    act(() => {
      response.result.current.toggleMenu();
    });

    expect(response.result.current.isOpen).toEqual(false);
  });

  it("When closeMenu is called, then isOpen is false", () => {
    act(() => {
      response.result.current.toggleMenu();
    });

    expect(response.result.current.isOpen).toEqual(true);

    act(() => {
      response.result.current.closeMenu();
    });

    expect(response.result.current.isOpen).toEqual(false);
  });

  it("When onKeyDown is called with Enter code, then isOpen is true", () => {
    act(() => {
      response.result.current.onKeyDown(
        // @ts-ignore
        {
          code: KeyCodeEnum.ENTER,
          preventDefault: jest.fn(),
        }
      );
    });

    expect(response.result.current.isOpen).toEqual(true);
  });

  it("When onKeyDown is called with Enter and Tab code, then isOpen is false", () => {
    act(() => {
      response.result.current.onKeyDown(
        // @ts-ignore
        {
          code: KeyCodeEnum.ENTER,
          preventDefault: jest.fn(),
        }
      );
    });

    act(() => {
      response.result.current.onKeyDown(
        // @ts-ignore
        {
          code: KeyCodeEnum.TAB,
          preventDefault: jest.fn(),
        }
      );
    });

    expect(response.result.current.isOpen).toEqual(false);
  });

  it("When onKeyDown is called with Enter code two times, then optionsMapped first item is selected", () => {
    act(() => {
      response.result.current.onKeyDown(
        // @ts-ignore
        {
          code: KeyCodeEnum.ENTER,
          preventDefault: jest.fn(),
        }
      );
    });

    act(() => {
      response.result.current.onKeyDown(
        // @ts-ignore
        {
          code: KeyCodeEnum.ENTER,
          preventDefault: jest.fn(),
        }
      );
    });

    expect(response.result.current.optionsMapped[0]).toEqual({
      selected: true,
      focused: true,
      option: "test1",
    });
  });

  it("When onChangeOption is called with test1, then onChange is called with test1", () => {
    act(() => {
      response.result.current.onChangeOption("test1");
    });

    expect(comboBoxProps.onChange).toBeCalledWith("test1");
  });
});
