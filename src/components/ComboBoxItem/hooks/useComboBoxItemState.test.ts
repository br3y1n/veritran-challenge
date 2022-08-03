import { renderHook } from "@testing-library/react";
import { useRef } from "react";
import { useComboBoxItemState } from "./useComboBoxItemState";
import { ComboBoxItemProps } from "../models";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: jest.fn(),
}));

const mockRef = {
  current: {
    offsetParent: {
      offsetHeight: 100,
      scrollTop: 10,
      scroll: jest.fn(),
    },
    offsetTop: 50,
    offsetHeight: 200,
  },
};

const comboBoxItemProps: ComboBoxItemProps = {
  focused: true,
  option: "test1",
  selected: false,
  onChangeOption: jest.fn(),
};

describe("useComboBoxItemState tests:", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("When it is called, then it return a initial State (ref)", () => {
    (useRef as jest.Mock).mockReturnValue(mockRef);
    jest.spyOn(window, "scroll").mockImplementation(() => {});

    const response = renderHook(() => useComboBoxItemState(comboBoxItemProps));

    expect(response.result.current).toEqual({ ref: mockRef });
  });

  it("When ref hasn't parent, then scroll isn't called", () => {
    (useRef as jest.Mock).mockReturnValue({
      current: {
        ...mockRef.current,
        offsetParent: undefined,
      },
    });

    renderHook(() => useComboBoxItemState(comboBoxItemProps));

    expect(mockRef.current.offsetParent.scroll).toBeCalledTimes(0);
  });

  it("When focused is false, then scroll isn't called", () => {
    (useRef as jest.Mock).mockReturnValue(mockRef);

    renderHook(() =>
      useComboBoxItemState({ ...comboBoxItemProps, focused: false })
    );

    expect(mockRef.current.offsetParent.scroll).toBeCalledTimes(0);
  });

  it("When ref isScrollable (bigger), then scroll is called", () => {
    (useRef as jest.Mock).mockReturnValue(mockRef);

    renderHook(() => useComboBoxItemState(comboBoxItemProps));

    expect(mockRef.current.offsetParent.scroll).toBeCalledTimes(1);
  });

  it("When ref isScrollable (smaller), then scroll is called", () => {
    (useRef as jest.Mock).mockReturnValue({
      current: {
        ...mockRef.current,
        offsetTop: 1,
        offsetHeight: 1,
      },
    });
    renderHook(() => useComboBoxItemState(comboBoxItemProps));

    expect(mockRef.current.offsetParent.scroll).toBeCalledTimes(1);
  });

  it("When ref isn't Scrollable, then scroll isn't called", () => {
    (useRef as jest.Mock).mockReturnValue({
      current: {
        offsetParent: {
          ...mockRef.current.offsetParent,
          offsetHeight: 100,
          scrollTop: 0,
        },
        offsetTop: 1,
        offsetHeight: 1,
      },
    });
    renderHook(() => useComboBoxItemState(comboBoxItemProps));

    expect(mockRef.current.offsetParent.scroll).toBeCalledTimes(0);
  });
});
