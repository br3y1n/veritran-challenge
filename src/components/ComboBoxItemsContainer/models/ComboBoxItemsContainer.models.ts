import { Option } from "../../ComboBox/models";

interface ComboBoxItemsContainerProps {
  options: Option[];
  onChangeOption: (option: string) => void;
  subContainerClassname?: string;
  itemsClassname?: string;
}

export { ComboBoxItemsContainerProps };
