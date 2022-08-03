import { FC } from "react";
import {
  ComboBoxTemplateStyles,
  LeftContainer,
} from "./ComboBoxTemplate.styles";
import Chevron from "../Chevron/Chevron";
import { ComboBoxTemplateProps } from "./models";

const ComboBoxTemplate: FC<ComboBoxTemplateProps> = ({
  renderLeft,
  renderItems,
  isOpen,
  onClick,
  onBlur,
  onKeyDown,
}) => (
  <ComboBoxTemplateStyles
    role={"button"}
    tabIndex={0}
    onClick={onClick}
    className={isOpen ? "focused" : undefined}
    onBlur={onBlur}
    onKeyDown={onKeyDown}
  >
    <LeftContainer>{renderLeft()}</LeftContainer>
    <Chevron isUp={isOpen} />

    {isOpen && renderItems()}
  </ComboBoxTemplateStyles>
);

export default ComboBoxTemplate;
