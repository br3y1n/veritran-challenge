import styled from "styled-components";
import { selectColorWhite } from "../../theme/selectors";
import { ComboBoxItemsStyles } from "../ComboBoxItem/ComboBoxItem.styles";

const ComboBoxItemsContainerStyles = styled.div`
  top: 40px;
  left: 0px;
  position: absolute;
  padding: 4px 0px 8px 0px;
  width: 100%;
  cursor: auto;
`;

const ComboBoxItemsSubContainerStyles = styled.ul`
  position: relative;
  padding: 4px 0px;
  width: 100%;
  max-height: 256px;
  overflow-y: auto;
  background-color: ${selectColorWhite};
  border-radius: 0px 0px 6px 6px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  margin: 0px;
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
