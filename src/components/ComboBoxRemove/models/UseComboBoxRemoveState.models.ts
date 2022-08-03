import { ComboBoxProps, UseComboBoxStateResponse } from "../../ComboBox/models";
import { MouseEventHandler } from "react";

interface UseComboBoxRemoveStateResponse extends UseComboBoxStateResponse {
  onRemove: MouseEventHandler<HTMLDivElement & SVGSVGElement>;
}

type UseComboBoxRemoveState = (
  props: ComboBoxProps
) => UseComboBoxRemoveStateResponse;

export { UseComboBoxRemoveState, UseComboBoxRemoveStateResponse };
