import styled from "styled-components";
import { CHEVRON_SIZE } from "../Chevron/Chevron.styles";
import {
  selectColorGrey4,
  selectColorSecondary,
  selectColorWhite,
} from "../../theme/selectors";

const PADDING_Y = 3;
const PADDING_X = 8;

const ComboBoxTemplateStyles = styled.div`
  padding: ${PADDING_Y}px ${PADDING_X}px;
  background: ${selectColorWhite};
  border: 1px solid ${selectColorGrey4};
  border-radius: 6px;
  height: calc(38px - ${PADDING_Y * 2}px);
  width: calc(238px - ${PADDING_X * 2}px);
  cursor: pointer;
  display: flex;
  position: relative;
  user-select: none;

  &:focus-visible {
    outline: ${selectColorSecondary} auto 1px;
  }

  &.focused {
    border-color: ${selectColorSecondary};
  }
`;

const LeftContainer = styled.div`
  height: 100%;
  width: calc(100% - ${CHEVRON_SIZE}px);
`;

export { ComboBoxTemplateStyles, LeftContainer };
