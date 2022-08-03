import { Options } from "../../ComboBox/models";

interface ComboBoxItemsContainerProps {
  options: Options[];
  onChangeOption: (option: string) => void;
}

export { ComboBoxItemsContainerProps };
