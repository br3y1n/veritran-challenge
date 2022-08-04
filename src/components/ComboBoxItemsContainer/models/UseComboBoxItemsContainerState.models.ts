import { MutableRefObject } from "react";
import { ComboBoxItemsContainerProps } from "./ComboBoxItemsContainer.models";

interface UseComboBoxItemsContainerStateResponse {
  ref: MutableRefObject<HTMLElement | undefined>;
}

type UseComboBoxItemsContainerState = (
  props: ComboBoxItemsContainerProps
) => UseComboBoxItemsContainerStateResponse;

export {
  UseComboBoxItemsContainerState,
  UseComboBoxItemsContainerStateResponse,
};
