import styled from "styled-components";
import { ReactComponent as OldSearch } from "../../assets/images/search.svg";
import {
  selectColorBlack,
  selectColorGrey3,
  selectColorGrey4,
  selectColorGrey5,
  selectColorSecondary,
  selectColorWhite,
  selectFontFamily,
  selectFontSizeExtraLarge,
  selectFontSizeLarge,
} from "../../theme/selectors";
import ComboBoxItemsContainer from "../ComboBoxItemsContainer/ComboBoxItemsContainer";
import { FC } from "react";
import { ComboBoxItemsContainerProps } from "../ComboBoxItemsContainer/models";

const WithItemStyles: FC<
  ComboBoxItemsContainerProps & { className?: string }
> = ({ className, ...rest }) => (
  <ComboBoxItemsContainer itemsClassname={className} {...rest} />
);

const WrapperComboBoxItemsContainer: FC<
  ComboBoxItemsContainerProps & { className?: string }
> = ({ className, ...rest }) => (
  <ComboBoxFilterItemStyles subContainerClassname={className} {...rest} />
);

const SEARCH_SIZES = 24;

const FilterContainerStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const InputStyles = styled.input`
  width: calc(100% - 36px);
  height: calc(100% - 4px);
  margin: 0px;
  padding: 0px;
  border-color: transparent;
  outline: none;
  caret-color: ${selectColorSecondary};
  color: ${selectColorGrey5};
  font-family: ${selectFontFamily};
  font-size: ${selectFontSizeLarge};
`;

const SearchStyles = styled(OldSearch)`
  height: ${SEARCH_SIZES}px;
  width: ${SEARCH_SIZES}px;
  margin: 4px 12px 4px 0px;

  & > * {
    fill: ${selectColorBlack};
  }
`;

const ComboBoxFilterItemStyles = styled(WithItemStyles)`
  height: 48px;
  font-size: ${selectFontSizeExtraLarge};

  &.selected {
    color: ${selectColorSecondary};
    border-left: 3px solid ${selectColorSecondary};
    font-weight: 600;
  }

  &.selected:not(:hover, .focused) {
    background-color: ${selectColorWhite};
  }
`;

const WrapperComboBoxItemsContainerStyles = styled(
  WrapperComboBoxItemsContainer
)`
  border-radius: 6px;
  padding: 8px 0px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${selectColorGrey3};
    border-radius: 13px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${selectColorGrey4};
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: ${selectColorGrey4};
  }
`;

export {
  FilterContainerStyles,
  InputStyles,
  SearchStyles,
  WrapperComboBoxItemsContainerStyles,
};
