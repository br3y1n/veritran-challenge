import { useComboBoxState } from "../../ComboBox/hooks/useComboBoxState";
import { MouseEventHandler } from "react";
import { UseComboBoxRemoveState } from "../models";

const useComboBoxRemoveState: UseComboBoxRemoveState = (props) => {
  const comboBoxState = useComboBoxState(props);

  const onRemove: MouseEventHandler<HTMLDivElement & SVGSVGElement> = (
    event
  ) => {
    event.preventDefault();
    event.stopPropagation();
    comboBoxState.onChangeOption(null);
  };

  return {
    ...comboBoxState,
    onRemove,
  };
};

export { useComboBoxRemoveState };
