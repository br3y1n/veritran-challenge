import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { UseComboBoxFilterStateResponse } from "../models";
import { useComboBoxFilterState } from "./useComboBoxFilterState";
import { useRef } from "react";
import { ComboBoxProps } from "../../ComboBox/models";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: jest.fn(),
}));

const comboBoxProps: ComboBoxProps = {
  options: ["test1", "test2", "test3"],
  onChange: jest.fn(),
};

describe("useComboBoxServerState tests:", () => {
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
});
