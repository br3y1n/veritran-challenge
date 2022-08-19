import styled from "styled-components";
import {
  selectColorGrey4,
  selectColorGrey5,
  selectFontFamily,
  selectFontSizeLarge,
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
  margin: 8px 0;
  cursor: pointer;

  &.selected {
    font-weight: 600;
    font-size: ${selectFontSizeSmall};
    margin: 0;
    display: block;
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

export { ComboBoxLabelStyles, PSelectedStyles };
