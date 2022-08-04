import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { ComboBoxProps, UseComboBoxFilterStateResponse } from "../models";
import { KeyCodeEnum } from "../../../enums";
import { useComboBoxFilterState } from "./useComboBoxFilterState";
import { useRef } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: jest.fn(),
}));

const comboBoxProps: ComboBoxProps = {
  options: ["test1", "test2", "test3"],
  onChange: jest.fn(),
};

describe("useComboBoxFilterState tests:", () => {
  let response: RenderHookResult<UseComboBoxFilterStateResponse, unknown>;
  let focus: jest.Mock;
  let blur: jest.Mock;

  beforeEach(() => {
    focus = jest.fn();
    blur = jest.fn();

    (useRef as jest.Mock).mockReturnValue({
      current: {
        focus,
        blur,
      },
    });
    response = renderHook(() => useComboBoxFilterState(comboBoxProps));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("When it is called, then it return a initial state", () => {
    expect(response.result.current).toEqual({
      filterValue: "",
      goToFilterInput: expect.anything(),
      handlerOutside: expect.anything(),
      isOpen: false,
      isSelected: false,
      onChangeFilter: expect.anything(),
      onChangeOption: expect.anything(),
      onKeyDown: expect.anything(),
      openMenu: expect.anything(),
      optionsMapped: [
        {
          focused: false,
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
      ref: { current: { focus: expect.anything(), blur: expect.anything() } },
    });
  });

  it("When goToFilterInput is  called, then focus is called", () => {
    act(() => {
      response.result.current.goToFilterInput();
    });

    expect(focus).toBeCalledTimes(1);
  });

  it("When handlerOutside is  called, then blur is called", () => {
    act(() => {
      response.result.current.handlerOutside();
    });

    expect(blur).toBeCalledTimes(1);
  });

  it("When onChangeFilter is called with text, then filterValue is these text", () => {
    act(() => {
      response.result.current.onChangeFilter(
        //@ts-ignore
        { target: { value: "test1" } }
      );
    });

    expect(response.result.current.filterValue).toEqual("test1");
  });

  // it("When closeMenu is called, then isOpen is false", () => {
  //   act(() => {
  //     response.result.current.toggleMenu();
  //   });
  //
  //   expect(response.result.current.isOpen).toEqual(true);
  //
  //   act(() => {
  //     response.result.current.closeMenu();
  //   });
  //
  //   expect(response.result.current.isOpen).toEqual(false);
  // });
  //
  // it("When onKeyDown is called with Enter code, then isOpen is true", () => {
  //   act(() => {
  //     response.result.current.onKeyDown(
  //       // @ts-ignore
  //       {
  //         code: KeyCodeEnum.ENTER,
  //         preventDefault: jest.fn(),
  //       }
  //     );
  //   });
  //
  //   expect(response.result.current.isOpen).toEqual(true);
  // });
  //
  // it("When onKeyDown is called with Enter and Tab code, then isOpen is false", () => {
  //   act(() => {
  //     response.result.current.onKeyDown(
  //       // @ts-ignore
  //       {
  //         code: KeyCodeEnum.ENTER,
  //         preventDefault: jest.fn(),
  //       }
  //     );
  //   });
  //
  //   act(() => {
  //     response.result.current.onKeyDown(
  //       // @ts-ignore
  //       {
  //         code: KeyCodeEnum.TAB,
  //         preventDefault: jest.fn(),
  //       }
  //     );
  //   });
  //
  //   expect(response.result.current.isOpen).toEqual(false);
  // });
  //
  // it("When onKeyDown is called with Enter code two times, then optionsMapped first item is selected", () => {
  //   act(() => {
  //     response.result.current.onKeyDown(
  //       // @ts-ignore
  //       {
  //         code: KeyCodeEnum.ENTER,
  //         preventDefault: jest.fn(),
  //       }
  //     );
  //   });
  //
  //   act(() => {
  //     response.result.current.onKeyDown(
  //       // @ts-ignore
  //       {
  //         code: KeyCodeEnum.ENTER,
  //         preventDefault: jest.fn(),
  //       }
  //     );
  //   });
  //
  //   expect(response.result.current.optionsMapped[0]).toEqual({
  //     selected: true,
  //     focused: true,
  //     option: "test1",
  //   });
  // });
  //
  // it("When onChangeOption is called with test1, then onChange is called with test1", () => {
  //   act(() => {
  //     response.result.current.onChangeOption("test1");
  //   });
  //
  //   expect(comboBoxProps.onChange).toBeCalledWith("test1");
  // });
  //
  // it("When onRemove is called , then onChange is called with null", () => {
  //   act(() => {
  //     response.result.current.onRemove(
  //       //@ts-ignore
  //       {
  //         preventDefault: jest.fn(),
  //         stopPropagation: jest.fn(),
  //       }
  //     );
  //   });
  //
  //   expect(comboBoxProps.onChange).toBeCalledWith(null);
  // });
});
