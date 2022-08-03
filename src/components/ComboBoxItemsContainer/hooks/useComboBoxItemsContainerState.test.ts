import { renderHook } from "@testing-library/react";
import { useComboBoxItemsContainerState } from "./useComboBoxItemsContainerState";
import { useRef } from "react";

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

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useRef: jest.fn(),
}));

const mockScroll = jest.spyOn(window, "scroll").mockImplementation(() => {});

describe("useComboBoxItemsContainerState tests:", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("When it is called, then it return a initial State (ref)", () => {
    (useRef as jest.Mock).mockReturnValue(mockRef);
    jest.spyOn(window, "scroll").mockImplementation(() => {});

    const response = renderHook(() => useComboBoxItemsContainerState());

    expect(response.result.current).toEqual({ ref: mockRef });
  });

  it("When ref isScrollable, then scroll is called", () => {
    (useRef as jest.Mock).mockReturnValue(mockRef);

    renderHook(() => useComboBoxItemsContainerState());

    expect(mockScroll).toBeCalledTimes(1);
  });

  it("When ref hasn't parent, then scroll isn't called", () => {
    (useRef as jest.Mock).mockReturnValue({
      current: {
        ...mockRef.current,
        offsetParent: undefined,
      },
    });

    renderHook(() => useComboBoxItemsContainerState());

    expect(mockScroll).toBeCalledTimes(0);
  });
});
