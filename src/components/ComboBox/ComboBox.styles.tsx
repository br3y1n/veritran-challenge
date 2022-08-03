import styled from "styled-components";
import {
  selectColorGrey1,
  selectColorGrey2,
  selectColorGrey3,
  selectColorGrey4,
  selectColorGrey5,
  selectColorPrimary,
  selectColorWhite,
  selectFontFamily,
  selectFontSizeLarge,
  selectFontSizeMedium,
  selectFontSizeSmall,
} from "../../theme/selectors";

const ComboBoxLabelStyles = styled.label`
  color: ${selectColorGrey4};
  font-family: ${selectFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: ${selectFontSizeLarge};
  line-height: 16px;
  display: inline-block;
  margin: 8px 0px;
  cursor: pointer;

  &.selected {
    font-weight: 600;
    font-size: ${selectFontSizeSmall};
    margin: 0px;
    display: block;
  }
`;

const ComboBoxItemsContainerStyles = styled.ul`
  z-index: 1000;
  padding: 4px 0px;
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  max-height: 256px;
  background-color: ${selectColorWhite};
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  margin: 4px 0px;
  list-style-type: none;
`;

const ComboBoxItemsStyles = styled.li`
  padding: 0px 24px;
  height: 40px;
  width: calc(100% - 48px);
  color: ${selectColorPrimary};
  font-family: ${selectFontFamily};
  font-size: ${selectFontSizeMedium};
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${selectColorGrey1};
  }
  &.selected:not(:hover) {
    background-color: ${selectColorGrey2};
  }
  &.focused {
    background-color: ${selectColorGrey3};
  }
`;

const PSelectedStyles = styled.p`
  display: block;
  margin: 0;
  font-family: ${selectFontFamily};
  font-style: normal;
  font-weight: 400;
  font-size: ${selectFontSizeLarge};
  line-height: 16px;
  color: ${selectColorGrey5};
`;

export {
  ComboBoxLabelStyles,
  ComboBoxItemsStyles,
  ComboBoxItemsContainerStyles,
  PSelectedStyles,
};
