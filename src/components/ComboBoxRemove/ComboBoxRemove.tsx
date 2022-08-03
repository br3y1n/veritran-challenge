import { FC } from "react";
import ComboBoxTemplate from "../ComboBoxTemplate/ComboBoxTemplate";
import ComboBoxItemsContainer from "../ComboBoxItemsContainer/ComboBoxItemsContainer";
import {
  ComboBoxLabelStyles,
  PSelectedStyles,
} from "../ComboBox/ComboBox.styles";
import { CloseStyles, InputContainerStyles } from "./ComboBoxRemove.styles";
import { ComboBoxProps } from "../ComboBox/models";
import { useComboBoxRemoveState } from "./hooks/useComboBoxRemoveState";

const ComboBoxRemove: FC<ComboBoxProps> = (props) => {
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
    onRemove,
  } = useComboBoxRemoveState(props);

  return (
    <ComboBoxTemplate
      onClick={toggleMenu}
      onClickOutside={closeMenu}
      isOpen={isOpen}
      onKeyDown={onKeyDown}
      renderLeft={() => (
        <InputContainerStyles>
          <div>
            <ComboBoxLabelStyles className={classLabel}>
              Select an item
            </ComboBoxLabelStyles>

            {isSelected && <PSelectedStyles>{itemSelected}</PSelectedStyles>}
          </div>

          {isSelected && (
            <CloseStyles onClick={onRemove} data-testid={"CloseIcon"} />
          )}
        </InputContainerStyles>
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

export default ComboBoxRemove;
