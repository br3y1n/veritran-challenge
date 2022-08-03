import { act, renderHook, RenderHookResult } from "@testing-library/react";
import { useOnClickOutside } from "./useOnClickOutside";
import { fireEvent } from "@storybook/testing-library";

const handler = jest.fn();

describe("useComboBoxState tests:", () => {
  let response: RenderHookResult<void, unknown>;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("When it is called, then it return a undefined", () => {
    response = renderHook(() =>
      useOnClickOutside({ current: undefined }, handler)
    );
    expect(response.result.current).toEqual(undefined);
  });

  it("When mouseDown is called outside from element, then handler is called", () => {
    response = renderHook(() =>
      useOnClickOutside({ current: undefined }, handler)
    );
    act(() => {
      fireEvent.mouseDown(document);
    });

    expect(handler).toBeCalledTimes(1);
  });

  it("When mouseDown is called from element, then handler isn't called", () => {
    jest.spyOn(document, "contains").mockReturnValue(true);

    response = renderHook(() =>
      useOnClickOutside(
        // @ts-ignore
        { current: document },
        handler
      )
    );

    act(() => {
      fireEvent.mouseDown(document);
    });

    expect(handler).toBeCalledTimes(0);
  });
});
