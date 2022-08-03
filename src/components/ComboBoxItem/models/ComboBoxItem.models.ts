interface ComboBoxItemProps {
  selected: boolean;
  focused: boolean;
  option: string;
  onChangeOption: (option: string) => void;
}

export { ComboBoxItemProps };
