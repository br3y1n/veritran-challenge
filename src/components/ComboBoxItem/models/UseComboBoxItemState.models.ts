import { MutableRefObject } from "react";
import { ComboBoxItemProps } from "./ComboBoxItem.models";

interface UseComboBoxItemStateResponse {
  ref: MutableRefObject<HTMLElement | undefined>;
}

type UseComboBoxItemState = (
  props: ComboBoxItemProps
) => UseComboBoxItemStateResponse;

export { UseComboBoxItemState, UseComboBoxItemStateResponse };
