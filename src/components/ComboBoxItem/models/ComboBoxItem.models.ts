interface ComboBoxItemProps {
  selected: boolean;
  focused: boolean;
  option: string;
  onChangeOption: (option: string) => void;
  className?: string;
}

export { ComboBoxItemProps };
