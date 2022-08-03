import { FC } from "react";
import ComboBoxTemplate from "../ComboBoxTemplate/ComboBoxTemplate";
import {
  ComboBoxItemsContainerStyles,
  ComboBoxItemsStyles,
  ComboBoxLabelStyles,
  PSelectedStyles,
} from "./ComboBox.styles";
import { ComboBoxProps } from "./models";
import { useComboBoxState } from "./hooks/useComboBoxState";

const ComboBox: FC<ComboBoxProps> = (props) => {
  const {
    isOpen,
    classLabel,
    isSelected,
    optionsMapped,
    itemSelected,
    toggleMenu,
    closeMenu,
    onKeyDown,
    onChangeOption,
  } = useComboBoxState(props);

  return (
    <ComboBoxTemplate
      onClick={toggleMenu}
      onBlur={closeMenu}
      isOpen={isOpen}
      onKeyDown={onKeyDown}
      renderLeft={() => (
        <>
          <ComboBoxLabelStyles className={classLabel}>
            Select an item
          </ComboBoxLabelStyles>

          {isSelected && <PSelectedStyles>{itemSelected}</PSelectedStyles>}
        </>
      )}
      renderItems={() => (
        <ComboBoxItemsContainerStyles role={"listitem"} tabIndex={-1}>
          {optionsMapped.map(({ option, selected, focused }, index) => (
            <ComboBoxItemsStyles
              key={index}
              onClick={() => onChangeOption(option)}
              role={"option"}
              tabIndex={-1}
              className={`${selected ? "selected" : ""} ${
                focused ? "focused" : ""
              }`}
            >
              {option}
            </ComboBoxItemsStyles>
          ))}
        </ComboBoxItemsContainerStyles>
      )}
    />
  );
};

export default ComboBox;
