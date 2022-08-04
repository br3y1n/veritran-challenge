import { ComboBoxProps, Option } from "../../ComboBox/models";
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  MutableRefObject,
} from "react";

interface UseComboBoxFilterStateResponse {
  ref: MutableRefObject<HTMLElement>;
  isOpen: boolean;
  filterValue: string;
  isSelected: boolean;
  optionsMapped: Option[];
  onChangeFilter: ChangeEventHandler<HTMLInputElement>;
  handlerOutside: () => void;
  goToFilterInput: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  onChangeOption: (option: string | null) => void;
  openMenu: () => void;
}

type UseComboBoxFilterState = (
  props: ComboBoxProps
) => UseComboBoxFilterStateResponse;

export { UseComboBoxFilterStateResponse, UseComboBoxFilterState };
