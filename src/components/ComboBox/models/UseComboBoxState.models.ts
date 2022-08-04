import { ComboBoxProps } from "./ComboBox.models";
import { Option } from "./Options.models";
import { KeyboardEventHandler } from "react";

interface UseComboBoxStateResponse {
  isOpen: boolean;
  classLabel?: string;
  isSelected: boolean;
  optionsMapped: Option[];
  itemSelected: string | null;
  toggleMenu: () => void;
  closeMenu: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  onChangeOption: (option: string | null) => void;
}

type UseComboBoxState = (props: ComboBoxProps) => UseComboBoxStateResponse;

export { UseComboBoxState, UseComboBoxStateResponse };
