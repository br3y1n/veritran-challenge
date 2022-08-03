import { MutableRefObject } from "react";

interface UseComboBoxItemsContainerStateResponse {
  ref: MutableRefObject<HTMLElement | undefined>;
}

type UseComboBoxItemsContainerState =
  () => UseComboBoxItemsContainerStateResponse;

export {
  UseComboBoxItemsContainerState,
  UseComboBoxItemsContainerStateResponse,
};
