import styled from "styled-components";
import { selectColorWhite } from "../../theme/selectors";
import { ComboBoxItemsStyles } from "../ComboBoxItem/ComboBoxItem.styles";

const ComboBoxItemsContainerStyles = styled.div`
  top: 40px;
  left: 0;
  position: absolute;
  padding: 4px 0 8px 0;
  width: 100%;
  cursor: auto;
`;

const ComboBoxItemsSubContainerStyles = styled.ul`
  position: relative;
  padding: 4px 0;
  width: 100%;
  max-height: 256px;
  overflow-y: auto;
  background-color: ${selectColorWhite};
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.16);
  margin: 0;
  list-style-type: none;
`;

const NoMatchesStyles = styled(ComboBoxItemsStyles)`
  cursor: auto;

  &:hover {
    background-color: ${selectColorWhite};
  }
`;

export {
  ComboBoxItemsSubContainerStyles,
  ComboBoxItemsContainerStyles,
  NoMatchesStyles,
};
