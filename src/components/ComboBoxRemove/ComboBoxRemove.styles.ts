import styled from "styled-components";
import { ReactComponent as OldClose } from "../../assets/images/close.svg";
import { selectColorGrey4 } from "../../theme/selectors";

const X_SIZE = 24;

const CloseStyles = styled(OldClose)`
  height: ${X_SIZE}px;
  width: ${X_SIZE}px;
  margin: 4px 8px 4px 0px;
  cursor: pointer;

  & > * {
    fill: ${selectColorGrey4};
  }
`;

const InputContainerStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export { InputContainerStyles, CloseStyles };
