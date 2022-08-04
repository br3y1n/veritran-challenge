import ComboBoxTemplate from "../ComboBoxTemplate/ComboBoxTemplate";
import ComboBoxItemsContainer from "../ComboBoxItemsContainer/ComboBoxItemsContainer";
import { FC } from "react";
import { ComboBoxLabelStyles, PSelectedStyles } from "./ComboBox.styles";
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
      onClickOutside={closeMenu}
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
        <ComboBoxItemsContainer
          onChangeOption={onChangeOption}
          options={optionsMapped}
        />
      )}
    />
  );
};

export default ComboBox;
