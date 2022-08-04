import ComboBoxTemplate from "../ComboBoxTemplate/ComboBoxTemplate";
import {
  FilterContainerStyles,
  InputStyles,
  SearchStyles,
  WrapperComboBoxItemsContainerStyles,
} from "./ComboBoxFilter.styles";
import { FC, RefObject } from "react";
import { ComboBoxProps } from "../ComboBox/models";
import { useComboBoxFilterState } from "./hooks/useComboBoxFilterState";

const ComboBoxFilter: FC<ComboBoxProps> = (props) => {
  const {
    ref,
    isOpen,
    filterValue,
    isSelected,
    optionsMapped,
    onChangeFilter,
    handlerOutside,
    goToFilterInput,
    onKeyDown,
    onChangeOption,
    openMenu,
  } = useComboBoxFilterState(props);

  return (
    <ComboBoxTemplate
      isOpen={isOpen}
      onFocus={goToFilterInput}
      onClickOutside={handlerOutside}
      renderLeft={() => (
        <FilterContainerStyles>
          {!isSelected && <SearchStyles data-testid={"SearchIcon"} />}

          <InputStyles
            placeholder={"Filter by text"}
            onChange={onChangeFilter}
            value={filterValue}
            ref={ref as RefObject<HTMLInputElement>}
            onFocus={openMenu}
            onKeyDown={onKeyDown}
          />
        </FilterContainerStyles>
      )}
      renderItems={() => (
        <WrapperComboBoxItemsContainerStyles
          onChangeOption={onChangeOption}
          options={optionsMapped}
        />
      )}
    />
  );
};

export default ComboBoxFilter;
