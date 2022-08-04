import ComboBoxTemplate from "../ComboBoxTemplate/ComboBoxTemplate";
import {
  FilterContainerStyles,
  InputStyles,
  SearchStyles,
  WrapperComboBoxItemsContainerStyles,
} from "../ComboBoxFilter/ComboBoxFilter.styles";
import { FC, RefObject, useEffect } from "react";
import { useComboBoxFilterState } from "../ComboBoxFilter/hooks/useComboBoxFilterState";
import { ComboBoxServerProps } from "./models";

const ComboBoxServer: FC<ComboBoxServerProps> = (props) => {
  const {
    ref,
    isOpen,
    isSelected,
    onChangeFilter,
    filterValue,
    optionsMapped,
    handlerOutside,
    goToFilterInput,
    onKeyDown,
    onChangeOption,
    openMenu,
  } = useComboBoxFilterState(props);

  useEffect(() => {
    if (filterValue.length >= 3) {
      props.onFetch(filterValue);
    }
  }, [filterValue]);

  return (
    <ComboBoxTemplate
      isOpen={filterValue.length >= 3 && isOpen}
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

export default ComboBoxServer;
