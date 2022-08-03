interface ComboBoxProps {
  /**
   * Options to render
   */
  options: string[];
  /**
   * Callback that is called when an option is chosen
   */
  onChange: (option: string) => void;
}

export { ComboBoxProps };
