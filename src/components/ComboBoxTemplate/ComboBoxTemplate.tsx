import { FC, RefObject, useRef } from "react";
import {
  ComboBoxTemplateStyles,
  LeftContainer,
} from "./ComboBoxTemplate.styles";
import Chevron from "../Chevron/Chevron";
import { ComboBoxTemplateProps } from "./models";
import { useOnClickOutside } from "../../hooks/useOnClickOutside/useOnClickOutside";

const ComboBoxTemplate: FC<ComboBoxTemplateProps> = ({
  renderLeft,
  renderItems,
  isOpen,
  onClick,
  onClickOutside,
  onKeyDown,
  onFocus,
}) => {
  const ref = useRef<HTMLElement>();
  useOnClickOutside(ref, onClickOutside);

  return (
    <ComboBoxTemplateStyles
      role={"button"}
      tabIndex={0}
      onClick={onClick}
      onFocus={onFocus}
      className={isOpen ? "focused" : undefined}
      onKeyDown={onKeyDown}
      ref={ref as unknown as RefObject<HTMLDivElement>}
    >
      <LeftContainer>{renderLeft()}</LeftContainer>
      <Chevron isUp={isOpen} />

      {isOpen && renderItems()}
    </ComboBoxTemplateStyles>
  );
};

export default ComboBoxTemplate;
