import { ComboBoxProps } from "../../ComboBox/models";

interface ComboBoxServerProps extends ComboBoxProps {
  /**
   * Function that calls an API to load the data.
   */
  onFetch: (name: string) => void;
}

export { ComboBoxServerProps };
