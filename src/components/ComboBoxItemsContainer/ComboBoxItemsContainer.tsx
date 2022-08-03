import { FC, RefObject } from "react";
import { ComboBoxItemsContainerProps } from "./models";
import ComboBoxItem from "../ComboBoxItem/ComboBoxItem";
import {
  ComboBoxItemsContainerStyles,
  ComboBoxItemsSubcontainerStyles,
} from "./ComboBoxItemsContainer.styles";
import { useComboBoxItemsContainerState } from "./hooks/useComboBoxItemsContainerState";

const ComboBoxItemsContainer: FC<ComboBoxItemsContainerProps> = ({
  options,
  onChangeOption,
}) => {
  const { ref } = useComboBoxItemsContainerState();

  return (
    <ComboBoxItemsSubcontainerStyles
      ref={ref as unknown as RefObject<HTMLDivElement>}
    >
      <ComboBoxItemsContainerStyles role={"listitem"} tabIndex={-1}>
        {options.map(({ option, selected, focused }, index) => (
          <ComboBoxItem
            onChangeOption={onChangeOption}
            option={option}
            key={index}
            focused={focused}
            selected={selected}
          />
        ))}
      </ComboBoxItemsContainerStyles>
    </ComboBoxItemsSubcontainerStyles>
  );
};

export default ComboBoxItemsContainer;
