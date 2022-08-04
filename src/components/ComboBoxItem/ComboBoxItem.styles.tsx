import styled from "styled-components";
import {
  selectColorGrey1,
  selectColorGrey2,
  selectColorGrey3,
  selectColorPrimary,
  selectFontFamily,
  selectFontSizeMedium,
} from "../../theme/selectors";

const ComboBoxItemsStyles = styled.li`
  z-index: 1000;
  padding: 0px 24px;
  height: 40px;
  width: calc(100% - 48px);
  color: ${selectColorPrimary};
  font-family: ${selectFontFamily};
  font-size: ${selectFontSizeMedium};
  display: flex;
  align-items: center;
  cursor: pointer;

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

export { ComboBoxItemsStyles };
