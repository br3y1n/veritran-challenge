import styled, { css } from "styled-components";
import { ReactComponent as OldChevronDown } from "../../assets/images/chevronDown.svg";
import { ReactComponent as OldChevronUp } from "../../assets/images/chevronUp.svg";
import { selectColorSecondary } from "../../theme/selectors";

const CHEVRON_SIZE = 24;

const styles = css`
  height: ${CHEVRON_SIZE}px;
  width: ${CHEVRON_SIZE}px;
  margin: 4px 0;
  & > * {
    fill: ${selectColorSecondary};
  }
`;

const ChevronDown = styled(OldChevronDown)`
  ${styles}
`;

const ChevronUp = styled(OldChevronUp)`
  ${styles}
`;

export { ChevronUp, ChevronDown, CHEVRON_SIZE };
