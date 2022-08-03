import { act, renderHook, RenderHookResult } from "@testing-library/react";
import {
  ComboBoxProps,
  UseComboBoxRemoveStateResponse,
  UseComboBoxStateResponse,
} from "../models";
import { KeyCodeEnum } from "../../../enums";
import { useComboBoxRemoveState } from "./useComboBoxRemoveState";

const comboBoxProps: ComboBoxProps = {
  options: ["test1", "test2", "test3"],
  onChange: jest.fn(),
};

describe("useComboBoxRemoveState tests:", () => {
  let response: RenderHookResult<UseComboBoxRemoveStateResponse, unknown>;

  beforeEach(() => {
    response = renderHook(() => useComboBoxRemoveState(comboBoxProps));
  });

  it("When it is called, then it return a initial state", () => {
    expect(response.result.current).toEqual({
      closeMenu: expect.anything(),
      isOpen: false,
      isSelected: false,
      itemSelected: null,
      onRemove: expect.anything(),
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

  it("When onRemove is called , then onChange is called with null", () => {
    act(() => {
      response.result.current.onRemove(
        //@ts-ignore
        {
          preventDefault: jest.fn(),
          stopPropagation: jest.fn(),
        }
      );
    });

    expect(comboBoxProps.onChange).toBeCalledWith(null);
  });
});
