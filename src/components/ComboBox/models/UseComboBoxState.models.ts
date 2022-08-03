import { ComboBoxProps } from "./ComboBox.models";
import { Options } from "./Options.models";
import { KeyboardEventHandler } from "react";

interface UseComboBoxStateResponse {
  isOpen: boolean;
  classLabel?: string;
  isSelected: boolean;
  optionsMapped: Options[];
  itemSelected?: string;
  toggleMenu: () => void;
  closeMenu: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  onChangeOption: (option: string) => void;
}

type UseComboBoxState = (props: ComboBoxProps) => UseComboBoxStateResponse;

export { UseComboBoxState, UseComboBoxStateResponse };
