import { KeyboardEventHandler, ReactElement } from "react";

interface ComboBoxTemplateProps {
  renderLeft: () => ReactElement;
  renderItems: () => ReactElement;
  isOpen: boolean;
  onClick: () => void;
  onClickOutside: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
}

export { ComboBoxTemplateProps };
